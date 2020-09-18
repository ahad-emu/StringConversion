/*Sentence case text formate */
function SentenceCase() {
  var x = document.getElementById('sampletext').value;
  var y = x[0].toUpperCase() + x.slice(1).toLowerCase();
  document.getElementById('sampletext').value = y;
}

/*upper Case text formate */
function upperCase() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = x.toUpperCase();
}

/*Lower case text formate */
function lowerCase() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = x.toLowerCase();
}

/*Capitalized case text formate */
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

/*alternating case text formate */
function alternating(){
  var x = document.getElementById('sampletext').value;
  var length = x.strlen();
  var y = "";

  for(let i = 0; i<length; i++){
    if(i%2==0){
      y = y + x[i].toLowerCase();
    }
    else{
      y = y + x[i].toUpperCase();
    }
  }
  document.getElementById('sampletext').value = y;
}

/*clear text */
function cleartext() {
  var x = document.getElementById('sampletext').value;
  document.getElementById('sampletext').value = "";
}
