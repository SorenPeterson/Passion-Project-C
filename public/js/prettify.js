$(document).ready(function($) {
var prettify = function(date) {
  var current = Date.now();
  var sec = Date.parse(date);
  var a = Math.round((current - sec) / 1000);
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
  return result;
  };
});