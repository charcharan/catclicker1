var i = 1;
$("#target").click( function(e) {
  console.log(i);
  i++;
  document.getElementById('target').innerHTML = target;

});
