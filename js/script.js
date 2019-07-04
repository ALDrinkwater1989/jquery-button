$(document).ready(function(){
 // put your code here
 //all panels disappear when one is clicked
 /*$(".theButton").click(function(){
    $("#panel .container").siblings().hide();
 });
 */
 
  //the panel that was clicked on disappears
 $(".theButton").click(function(){
  $(this).hide();
  
 });
 //fades all of the pannels when one is clicked
  $(".theButton").click(function(){
  $("#panel .container").fadeTo(1000, 0.5);
  
 })
 
 $(".superButton").click(function() {
    $("#panel .container").siblings().fadeTo(1000, 1); 
 });
 //change panel to black when mouse enter
 $(".theButton").mouseenter(function(){
  $(this).addClass("black");
 });
 //revert colour back when mouse leaves
 $(".theButton").mouseleave(function(){
  $(this).removeClass("black");
 });
 
 //will display rgb value of selected panel in the reset panel
 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });
});



