// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui  
  if(param1 == true && param2 == true){return true
  }
  else{return false
  }
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  for(let index = 0; index < array.length; index += 1){
    return array[array.length - 1] + "," + " " + array[0]
  }
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1
};

// Desafio 6
function highestCount(array) {
  // seu código aqui
  var contagemFinal = 0
  for(let index = 0; index < array.length; index += 1){
   if(Math.max.apply(null, array) == array[index]){contagemFinal += 1}
  }
  return contagemFinal
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(cat1 - mouse > cat2 - mouse){
    return "cat2"
  }
  else if(cat1 - mouse < cat2 - mouse){
    return "cat1"
  }
  else if(cat1 - mouse === cat2 - mouse){
    return "os gatos trombam e o rato foge"
  }
};

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrFinal = []
  for(let index = 0; index < array.length; index += 1)
  
  if(array[index] % 3 == 0 && array[index] % 5 != 0){arrFinal.push("fizz")
  }
  else if(array[index] % 5 == 0 && array[index] % 3 != 0){arrFinal.push("buzz")
  }
  else if(array[index] % 3 == 0 && array[index] % 5 == 0){arrFinal.push("fizzBuzz")
  }
  else {arrFinal.push("bug!")
  }
  return arrFinal
};

// Desafio 9
function encode(string) {
  // seu código aqui

  for(let index = 0; index < string.length; index += 1){
    
    if(string[index] == "a"){string.replace(index, "1")
  }
    if(string[index] == "e"){string.replace(index, "2")
  }
    if(string[index] == "i"){string.replace(index, "3")
  }
    if(string[index] == "o"){string.replace(index, "4")
  }
    if(string[index] == "u"){string.replace(index, "5")
  }
 }
 return string;
};

function decode(string) {
  // seu código aqui
  for(let index = 0; index < string.length; index += 1){
    
    if(string[index] == 1){string.replace(index, "a")
  }
    if(string[index] == 2){string.replace(index, "b")
  }
    if(string[index] == 3){string.replace(index, "c")
  }
    if(string[index] == 4){string.replace(index, "d")
  }
    if(string[index] == 5){string.replace(index, "e")
  }
 }
 return string;
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
