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