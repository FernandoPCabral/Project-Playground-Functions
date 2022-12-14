// Desafio 1
function compareTrue(param1, param2) {
  // eslint-disable-next-line editorconfig/editorconfig
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // eslint-disable-next-line editorconfig/editorconfig
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // eslint-disable-next-line editorconfig/editorconfig
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // eslint-disable-next-line editorconfig/editorconfig
  // seu código aqui
  let result = array[array.length - 1].concat(', ', array[0]);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let contagemFinal = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (Math.max.apply(null, array) === array[index]) { contagemFinal += 1; }
  }
  return contagemFinal;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let corrida1 = Math.abs(cat1 - mouse);
  let corrida2 = Math.abs(cat2 - mouse);

  if (corrida1 > corrida2) {
    return 'cat2';
  } if (corrida1 < corrida2) {
    return 'cat1';
  } if (corrida1 === corrida2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrFinal = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrFinal.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arrFinal.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrFinal.push('fizzBuzz');
    } else {
      arrFinal.push('bug!');
    }
    return arrFinal;
  }
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let novaString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      novaString += '1';
    } else if (string[index] === 'e') {
      novaString += '2';
    } else if (string[index] === 'i') {
      novaString += '3';
    } else if (string[index] === 'o') {
      novaString += '4';
    } else if (string[index] === 'u') {
      novaString += '5';
    } else { novaString += string[index]; }
  }
  return novaString;
}

function decode(string) {
  // seu código aqui
  let novaString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      novaString += 'a';
    } else if (string[index] === '2') {
      novaString += 'e';
    } else if (string[index] === '3') {
      novaString += 'i';
    } else if (string[index] === '4') {
      novaString += 'o';
    } else if (string[index] === '5') {
      novaString += 'u';
    } else {
      novaString += string[index];
    }
  }
  return novaString;
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
