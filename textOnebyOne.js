let message= "WELCOME TO MY WORLD"
var timePerLetter = 500,
    newLineCharacter = '|',
    text = document.createTextNode('');
document.getElementById('test').appendChild(text);
function printOut(str) {
  var i = 0;
  (function main() {
    var char = str[i++];
    console.log(char)
    text.nodeValue += char == newLineCharacter ? '\n' : char;
    if(i < str.length){

      setTimeout(main, 200);
      srt=null;
    }

  })();
}
printOut("Jonathan");