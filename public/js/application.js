function createCategory(event) {
  var that = $(this)
  var categoryInput = that.find("input[name=name]")
  var new_item = $("#category-list-item-template").find("li").clone();

  var params = {
    name: categoryInput.val()
  }

  event.preventDefault();
  categoryInput.val("");

  new_item.prepend(params.name);
  $("#category-list").append(new_item);

  $.post('/categories', params).done(function(response) {
    new_item.attr('data', response.id);
    new_item.find("input[name=delete]").on('click', deleteCategory);

    $("form#add-link").find("select").append('<option value="' + response.id + '">' + params.name + '</option>')
  }).fail(function() {
    new_item.remove();
  });
}

function deleteCategory() {
  var that = $(this).parent()
  that.remove();
  $("option[value=" + that.attr("data") + "]").remove();

  $.post('/categories/delete', {
    id: Number(that.attr("data"))
  });
}

function addLink(event) {
  var that = $(this);
  var categoryInput = that.find("select :selected");
  var linkInput = that.find("input[name=link]");
  var new_item = $("#link-list-item-template").find("li").clone();

  var params = {
    link: linkInput.val(),
    category: Number(categoryInput.val())
  }

  event.preventDefault();

  $.post('/links/create', params)
}

function deleteLink(event) {

}

$(document).ready(function() {
  $(".category-list-item > input[name=delete]").on('click', deleteCategory);
  $(".link-list-item > input[name=delete]").on('click', deleteLink);

  $("#create-category").on('submit', createCategory);
  $("#add-link").on('submit', addLink);
});
