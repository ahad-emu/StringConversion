function cssChange() {
  var x = document.getElementById('sampletext').value;
  var length = x.length;
  var arr = x.split(" ");
  var word = arr.length;
  document.getElementById('outputtext').innerHTML = x;
  document.getElementById('character').innerHTML = length;
  document.getElementById('word').innerHTML = word;

}

function counter(){
  var x = document.getElementById('sampletext').value;
  var length = x.length;
  var arr = x.split(" ");
  var word = arr.length;
  document.getElementById('character').innerHTML = length;
  document.getElementById('word').innerHTML = word;
}

function copyFunctions() {
  var copyText = document.getElementById("sampletext");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
