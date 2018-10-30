$(document).ready(function(){
  $("#halloween-poster").attr('src', '/tW2ZStJJhd.jpg');
  //wait for new image to load
  setTimeout(function(){
    $("#halloween-poster").attr('src', '/images/halloweenimage.png');
  }, 1000);
});