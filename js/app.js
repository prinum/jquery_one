$(document).ready(function(){
  $('button').one('click',function(){
    alert($(this).html()+'click!');
  });
});