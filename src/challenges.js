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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
