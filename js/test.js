var i = 1;
var txt1 = $("<p></p>");
$("#target").click( function(e) {
  console.log(i);
  $("body").append(txt1.text("count=" + i++));
});
