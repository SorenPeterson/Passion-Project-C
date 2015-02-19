function Category(name) {
  var that = this;

  this.name = name;
  this.html = $("#category-list-item-template").find("li.category-list-item").clone();
  this.html.prepend(name);

  $("#category-list").append(this.html);

  this.html.find("input[name=delete]").on('click', function() {
    that.delete();
  })

  this.html.find(".add-link").on('submit', function(event) {
    event.preventDefault();
    var input = $(this).find("input[name=link]")
    that.addLink(input.val()).save(that.id);
    input.val("");
  })
}

Category.prototype.save = function() {
  var that = this;
  // Create the category in the database and set the id so we can reference it later
  $.post('/categories', {
    name: that.name
  }).done(function(response) {
    that.id = response.id;
  // Remove the category if it fails to validate
  }).fail(function() {
    that.html.remove();
  });
}

Category.prototype.delete = function() {
  var that = this;

  that.html.hide();

  $.post('/categories/delete', {
    id: that.id
  }).done(function() {
    that.html.remove();
  }).fail(function() {
    that.html.show();
  })
}

Category.prototype.addLink = function(link, id, title) {
  new_link = new Link(link, id, title);

  this.html.find(".link-list").append(new_link.html);
  return new_link;
}

function createCategory(event) {
  var input = $(this).find("input[name=name]");
  event.preventDefault();
  new Category(input.val()).save();
  input.val("");
}

function Link(link, id, title) {
  var that = this;
  this.link = link;
  this.id = id;
  this.title = title;

  this.html = $("#link-list-item-template").find(".link-list-item").clone();
  this.html.find("a").attr("href", link);
  this.html.find("a").text(this.title || this.link);

  this.html.data('selfref', that);

  this.html.draggable({
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
    that.html.find("a").text("")
  }).fail(function() {
    that.delete();
  });
}

Link.prototype.delete = function() {
  var that = this;
  this.html.remove();

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
  }
}
