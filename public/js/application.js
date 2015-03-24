function createCategory(event) {
  event.preventDefault();

  var input = $(this).find("input[name=name]");
  var category = new Category(input.val())

  $("#category-list").append(category.$el.html());
  input.val("");
}

function Link(link, id, title) {
  var that = this;
  this.link = link;
  this.id = id;
  this.title = title;

  this.$el = $("#link-list-item-template").find(".link-list-item").clone();
  this.$el.find("a").text(this.title || this.link);

  this.$el.data('selfref', that);

  this.$el.draggable({
    revert: true
  });
}

Link.prototype.save = function(category_id) {
  var that = this;
  $.post("/links/create", {
    link: that.link,
    category: category_id
  }, function(response) {
    that.id = response.id;
    that.title = response.title;
    that.$el.find("a").text(that.title || that.link)
    that.$el.find("a").attr("href", response.link);
  }).fail(function() {
    that.delete();
  });
}

Link.prototype.delete = function() {
  var that = this;
  this.$el.remove();

  $.post('/links/delete', {
    id: that.id
  }, function() {});
}

// function addLink(event) {
//   var that = $(this);
//   var categoryInput = that.find("select :selected");
//   var linkInput = that.find("input[name=link]");
//   var new_item = $("#link-list-item-template").find("li").clone();

//   var params = {
//     link: linkInput.val(),
//     category: Number(categoryInput.val())
//   }

//   event.preventDefault();
//   linkInput.val("");

//   $("li[data=" + params.category + "] > ul").append(new_item);
//   new_item.prepend(params.link);

//   $.post('/links/create', params, function() {
//     new_item.attr('data', response.id);
//     new_item.find("input[name=delete]").on('click', deleteLink);
//   })
// }

$(document).ready(function() {
  $("#create-category").on('submit', createCategory);
  $.get("/items", {}, function(response) {
    populate(response);
  })

  $("#trash").droppable({
    drop: function(event, ui) {
      $(ui.draggable).data().selfref.delete();
    }
  });
});

function populate(items) {
  for(var category in items) {
    new_category = new Category(items[category]["name"]);
    new_category.id = items[category]["id"];

    for(var link in items[category]["items"]) {
      var link_data = items[category]["items"][link]
      new_category.addLink(link_data["link"], link_data["id"], link_data["title"]);
    }

    $("#category-list").append(new_category.$el.html());
  }
}
