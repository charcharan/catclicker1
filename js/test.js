var i = 1;

$("#target").click( function(e) {
  console.log(i);
  i++;
  var txt = $("<p></p>").text("count=" + i);
  $("body").append(txt);

});
