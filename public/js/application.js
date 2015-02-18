function createCategory(event) {
  var that = $(this)
  var categoryInput = that.find("input[name=name]")

  event.preventDefault();

  params = {
    name: categoryInput.val()
  }

  $.post('/categories', params).done(function(response) {
    new_item = $("#category-list-item-template").find("li").clone();
    new_item.prepend(categoryInput.val());
    new_item.attr('data', response.id);
    new_item.on('click', deleteCategory);
    $("#category-list").append(new_item);

    categoryInput.val("");
  });
}

function deleteCategory() {
  var that = $(this)
  that.hide();

  $.post('/categories/delete', {
    id: that.attr("data")
  });
}

$(document).ready(function() {
  $(".category-list-item").on('click', deleteCategory);
  $("#create-category").on('submit', createCategory);
});
