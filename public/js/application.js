function createCategory(event) {
  var that = $(this)
  var categoryInput = that.find("input[name=name]")
  var new_item = $("#category-list-item-template").find("li").clone();

  event.preventDefault();

  params = {
    name: categoryInput.val()
  }

  new_item.prepend(categoryInput.val());
  $("#category-list").append(new_item);

  $.post('/categories', params).done(function(response) {
    new_item.attr('data', response.id);
    new_item.on('click', deleteCategory);

    $("form#add-link").find("select").append('<option value="' + response.id + '">' + categoryInput.val() + '</option>')

    categoryInput.val("");
  }).fail(function() {
    new_item.remove();
  });
}

function deleteCategory() {
  var that = $(this)
  that.remove();
  $("option[value=" + that.attr("data") + "]").remove();

  $.post('/categories/delete', {
    id: that.attr("data")
  });
}

function addLink() {

}

$(document).ready(function() {
  $(".category-list-item").on('click', deleteCategory);
  $("#create-category").on('submit', createCategory);
});
