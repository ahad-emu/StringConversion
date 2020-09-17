function upperCase() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = x.toUpperCase();
}

function lowerCase() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = x.toLowerCase();
}

function SentenceCase() {
  var x = document.getElementById('sampletext').value;
  var y = x[0].toUpperCase() + x.slice(1).toLowerCase();
  document.getElementById('sampletext').value = y;
}

function capitalize() {
  var x = document.getElementById('sampletext').value;
  var arr = x.split(" ");
  var newarr = [];
  for( let item of arr){
    var y = item[0].toUpperCase() + item.slice(1).toLowerCase();
    newarr.push(y);
  }
  var newstring = newarr.join(" ");
  document.getElementById('sampletext').value = newstring;
}

function cleartext() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = "";
}
