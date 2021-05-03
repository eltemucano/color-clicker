function random_color() {
  var rgb = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  color = "#"; //this is what we'll return!
  for (var i = 0; i < 6; i++) {
    x = Math.floor(Math.random() * 16);
    color += rgb[x];
  }
  return color;
}
$(document).ready(function () {
  $("#large_box").on("click",function () {
    $(this).children().css("background-color",random_color());
    $(this).css("background-color",random_color());
    //comenta esto cuando hayas averiguado para qué se utiliza event.stopPropagation
  });
  $(".side_box").on("click",function (event) {
    $(this).siblings().css("background-color",random_color());
    event.stopPropagation();
  });
  $(".middle_box").on("click",function (event) {
    $(this).parent().css("background-color",random_color());
    event.stopPropagation();
  });
});
