

// to make the  header move 
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").css("background-color", "#f9f9f9"); // Change background color on scroll
      $(".show").css("color", "#000"); // Change text color on scroll
    } else {
      $(".header").css("background-color", "transparent"); // Revert background color
      $(".show").css("color", "#fff"); // Revert text color
    }
  });
});