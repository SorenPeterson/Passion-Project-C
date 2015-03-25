var Category = function(name) {
  this.initialize = function() {
    this.name = name;
    this.$el = $('<div/>')
    this.render();
    this.bindEvents();
  }

  this.render = function() {
    this.$el.html(this.template({categoryName: name}));
    this.$el = this.$el.first();
  }

  this.initialize();
  return this;
}

Category.prototype.bindEvents = function() {
  var that = this;
  console.log(this.$el);

  this.$el.on('click', "input[name=delete]", function() {
    that.delete();
  })

  this.$el.on('submit', ".add-link", function(e) {
    e.preventDefault();
    var input = $(this).find("input[name=link]")
    that.addLink(input.val()).save(that.id);
    input.val("");
  })
}

Category.prototype.template = Handlebars.compile($("#category-list-item-template").html());

Category.prototype.save = function() {
  var that = this;
  // Create the category in the database and set the id so we can reference it later
  $.post('/categories', {
    name: that.name
  }).done(function(response) {
    that.id = response.id;
  // Remove the category if it fails to validate
  }).fail(function() {
    that.$el.remove();
  });
}

Category.prototype.delete = function() {
  var that = this;

  that.$el.hide();

  $.post('/categories/delete', {
    id: that.id
  }).done(function() {
    that.$el.remove();
  }).fail(function() {
    that.$el.show();
  })
}

Category.prototype.addLink = function(link, id, title) {
  new_link = new Link(link, id, title);

  this.$el.find(".link-list").append(new_link.html);
  return new_link;
}