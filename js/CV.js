jQuery(document).ready(function($) {
  // Code using $ as usual goes here.

$( ".experiences" ).click(function() {
    $( ".experience" ).toggle( "fast" );
  });
  $( ".educations" ).click(function() {
      $( ".education" ).toggle( "fast" );
  });
  
  
  //START BUTTON TWIST
  $(".educations").on('click',function(){
      $("#educationButton").toggleClass("active");
  });
  
  $(".experiences").on('click',function(){
      $("#experienceButton").toggleClass("active");
  });
  
  $(".skills").on('click',function(){
      $("#skillButton").toggleClass("active");
  });
  
  $(".certifications").on('click',function(){
      $("#certificationsButton").toggleClass("active");
  });
  
  $(".software").on('click',function(){
      $("#projectsButton").toggleClass("active");
  });
  //END BUTTON TWIST
  
  
  $( ".skills" ).click(function() {
      $( ".skill" ).toggle( "fast" );
  });
  $( ".software" ).click(function() {
      $( ".column" ).toggle( "fast" );
  });
  $( ".certifications" ).click(function() {
      $( ".certification" ).toggle( "fast" );
  });
});