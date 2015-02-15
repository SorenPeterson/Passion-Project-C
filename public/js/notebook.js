$(document).ready(function($) {
  
  $('#edit').on('click', function(e){
    e.preventDefault();
    editNote($(this).children().attr('href'));
  });
  $('#new_note').on('click', function(e){
    console.loge('hahaha')
    newNote();
  });
    // newNote();
  $('#create').on('click', function(e){
    e.preventDefault();
    createNote($(this).children().attr('href'));
  });
  $('#delete').on('click', function(e){
    e.preventDefault();
    deleteNote($(this).children().attr('href'));
  });
});

// New Note
var newNote = function(){
  // var clear = $.trim($('#main_note').html());
  $('.title').text('Please enter title')
  $('.description').text('Please enter description')
  $('.content').text('Please enter content')
};
// Edit Note:
// Title
// Description
// Content
var editNote = function(route){
  var title = $('#title').text()
  var description = $('#description').text()
  var content = $('.content').text()
  $.ajax({
    url: route,
    type: 'PUT',
    dataType: 'JSON',
    data: {title: title, description: description, content: content}
  })
  .done(function(data) {
    console.log("success");
  })
  .fail(function(data) {
    console.log("error");
  });
};

// Create a Note:
var createNote = function(route) {
  var newTitle = $('#main_note').find('.title').text();
  var newContent = $('#main_note').find('.content').text();
  var newDescription = $('#main_note').find('.description').text();
  // var newNote = $.trim($('#main_note').html());
  $.ajax({
    url: route,
    type: 'POST',
    data: {title: newTitle, description: newDescription, content: newContent}
  })
  .done(function(data) {
    // $('#left_note').html('')
    // $('#left_note').append('#right_note').html()
    // #('#right_note').html('')
    JSON.parse(data);
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
};
// DELETE NOTE
var deleteNote = function(route) {
  var title = $('#title').text()
  var page1 = $('#main_note').children()
  var page2 = $('#left_note').children()
  var page3 = $('#right_note').children()
  $.ajax({
    url: route,
    type: 'DELETE',
  })
  .done(function() {
    // have to .remove the information in the div
    console.log("success");
    console.log("Note: " + title + " Deleted");
    $('#main_note').html('');
    $('#main_note').append(page2);
    $('#left_note').append(page3);
    $('#right_note').hide();
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
};

    // $('#form').on('submit', function(e){
    //   e.preventDefault();
    //   $.ajax({
    //     url: '/todos',
    //     type: 'POST',
    //     data: $(this).serialize(),
    //     success: function(data){
    //       $('.todo_list').append(buildTodo(data.todo.todo_content, data.todo.id));
    //       $('form#form')[0].reset();
    //     }
    //   })
    // })