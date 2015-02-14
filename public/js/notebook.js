$(document).ready(function($) {
  // LEFT Drawer
  $('#drawer_left .note_id').replaceWith($('#notebox .note_id')[1]);
  $('#drawer_left .title').replaceWith($('#notebox .title')[1]);
  $('#drawer_left .description').replaceWith($('#notebox .description')[1]);
  $('#drawer_left .content').replaceWith($('#notebox .content')[1]);
    $('#drawer_left .created_at').replaceWith(prettify($('#notebox .created_at')[1].textContent));

// CENTER Drawer
  $('#drawer_center .note_id').replaceWith($('#notebox .note_id')[2]);
  $('#drawer_center .title').replaceWith($('#notebox .title')[2]);
  $('#drawer_center .description').replaceWith($('#notebox .description')[2]);
  $('#drawer_center .content').replaceWith($('#notebox .content')[2]);
  $('#drawer_center .created_at').replaceWith(prettify($('#notebox .created_at')[2].textContent));


// RIGHT Drawer
  $('#drawer_right .note_id').replaceWith($('#notebox .note_id')[3]);
  $('#drawer_right .title').replaceWith($('#notebox .title')[3]);
  $('#drawer_right .description').replaceWith($('#notebox .description')[3]);
  $('#drawer_right .content').replaceWith($('#notebox .content')[3]);
    $('#drawer_right .created_at').replaceWith(prettify($('#notebox .created_at')[3].textContent));

  // Main Content
  $('#drawer_center').clone().prependTo($('#main_note'));
  
  // Configuration
  // EDIT
  $('#edit').on('click', function(e){
    e.preventDefault();
    editNote($(this).children().attr('href'));
  });
    //NEW
  $('#new_note').on('click', function(e){
    newNote();
  });
  // CREATE
  $('#create').on('click', function(e){
    e.preventDefault();
    createNote($(this).children().attr('href'));
  });
  // DELETE
  $('#delete').on('click', function(e){
    e.preventDefault();
    deleteNote($(this).children().attr('href'));
  });
  // LEFT Page Selector
  $('#drawer_left').on('click', function(e){
    e.preventDefault();
  }) ;
  // RIGHT Page Selector
  $('#drawer_right').on('click', function(e){
    e.preventDefault();

  });
  // LEFT SCROLL PAGE
  $('#page_left').on('click', function(e){
    e.preventDefault();
    pageLeft();
  });
  // RIGHT SCROLL PAGE
  $('#page_right').on('click', function(e){
    e.preventDefault();
  });
});

// New Note
var newNote = function(){
  // var clear = $.trim($('#main_note').html());
  $('#main_note .title').text('Please enter title');
  $('#main_note .description').text('Please enter description');
  $('#main_note .content').text('Please enter content');
};
// Edit Note:
// Title
// Description
// Content
var editNote = function(route){
  var title = $('#main_note .title').text();
  var description = $('#main_note .description').text();
  var content = $('#main_note .content').text();
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
  $.ajax({
    url: route,
    type: 'POST',
    data: {title: newTitle, description: newDescription, content: newContent}
  })
  .done(function(data) {
    JSON.parse(data);
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
  var title = $('#title').text();
  var page1 = $('#main_note').children();
  var page2 = $('#left_note').children();
  var page3 = $('#right_note').children();
  $.ajax({
    url: route,
    type: 'DELETE',
  })
  .done(function(route) {
    // have to .remove the information in the div
    console.log("success");
    console.log("Note: " + title + " Deleted");
    $('#page4').hide();
    $('#page2').css('display', 'inline-block');
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  

};

var pageLeft = function(){
  // Move Center to Right
  // $('#drawer_right').html($('#drawer_center'));
  $('#drawer_right .note_id').replaceWith($('#drawer_center .note_id'));
  $('#drawer_right .title').replaceWith($('#drawer_center .title'));
  $('#drawer_right .description').replaceWith($('#drawer_center .description'));
  $('#drawer_right .content').replaceWith($('#drawer_center .content'));
  $('#drawer_right .created_at').replaceWith(prettify($('#drawer_center .created_at').textContent));

  // // Move Left to Center
  // $('#drawer_center').html($('#drawer_left'));
  $('#drawer_center .note_id').replaceWith($('#drawer_left .note_id'));
  $('#drawer_center .title').replaceWith($('#drawer_left .title'));
  $('#drawer_center .description').replaceWith($('#drawer_left .description'));
  $('#drawer_center .content').replaceWith($('#drawer_left.content'));
  $('#drawer_center .created_at').replaceWith(prettify($('#drawer_left .created_at').textContent));
  // // Outer Left to Left
  // $('#drawer_left').html($('#notebox')[0]);
    $('#drawer_left .note_id').replaceWith($('#notebox .note_id')[0]);
  $('#drawer_left .title').replaceWith($('#notebox .title')[0]);
  $('#drawer_left .description').replaceWith($('#notebox .description')[0]);
  $('#drawer_left .content').replaceWith($('#notebox .content')[0]);
  $('#drawer_left .created_at').replaceWith(prettify($('#notebox .created_at')[0].textContent));
};

// PRETTIFY!
var prettify = function(date) {
  var current = Date.now()
  var sec = Date.parse(date)
  var a = Math.round((current - sec) / 1000)
  var result;

  if (a === 0){
    result = 'just now';
  }else if(a === 1){
    result = 'a second ago';
  }else if( (a > 2) && (a < 59)){
    result = Math.round(a) +' seconds ago';
  }else if( (a > 60) && (a < 119)){
    result = 'a minute ago';
  }else if( (a > 120) && (a < 3540)){
    result = Math.round((a/60))+' minutes ago';
  }else if( (a > 3541) && (a < 7100)){
    result = 'an hour ago';
  }else if( (a > 7101) && (a < 82800)){
    result = Math.round((a+99)/3600) +' hours ago';
  }else if( (a > 82801) && (a < 172000)){
    result = 'a day ago';
  }else if( (a > 172001) && (a < 518400)){
    result = Math.round((a+800)/(60*60*24))+' days ago';
  }else if( (a > 518400) && (a < 1036800)){
    result = 'a week ago';
  }else{
    result = Math.round((a+180000)/(60*60*24*7)) + ' weeks ago';
  };
  return result
};

// $('#main_note .note_id').text()
// 
// $('#drawer_left .title').replaceWith($('#notebox .title')[1]);

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