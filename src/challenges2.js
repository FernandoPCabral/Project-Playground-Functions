// Desafio 10
function techList(array, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  
  let condSomaA = lineA < lineB + lineC;
  let condSomaB = lineB < lineC + lineA;
  let condSomaC = lineC < lineA + lineB;

  let condSubA = lineB - lineC;
  let condSubB = lineA - lineC;
  let condSubC = lineA - lineB;

  if(condSomaA == true && condSomaB == true && condSomaC == true && lineA > Math.abs(condSubA) && lineB > Math.abs(condSubB) && lineC > Math.abs(condSubC)){
    return true
  }
  else{
    return false
  }
};

// Desafio 13
function hydrate(string) {
  // seu código aqui

  let codigo = /\d+/g;
  let numeros = string.match(codigo);
  let somaFinal = 0;

  for(let index = 0; index < numeros.length; index += 1){
    numeros[index] = +numeros[index]
    somaFinal += numeros[index]
  }

  if(somaFinal == 1){
    return somaFinal + " copo de água"
  }
  else{
    return somaFinal + " copos de água"
  }
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
