// Desafio 10
function techList(techno, name) {
  // seu código aqui

  let tech = [];

  if(techno.length == 0){
    return "Vazio!"
  }

  techno = techno.sort()

  for(let index = 0; index < techno.length; index += 1){
    tech.push({
      tech: techno[index],
      name,
    })
  } 
  return tech;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui

  let arrRepetidos = {};

  arrRepetidos = array.reduce(function(chave, valor){
    if(!chave[valor]){
      chave[valor] = 1
    }
    else{
      chave[valor] += chave[valor]
    }

    return chave
  }, {})

  for(index in arrRepetidos){
    if(arrRepetidos[index] >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  if(array.length != 11) {
    return "Array com tamanho incorreto."
  };

  for(let index = 0; index < array.length; index += 1) {

    if(array[index] < 0 || array[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }

    if(index === 10){
      return "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10]
    }
  }
};

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

  for(let index = 0; index < numeros.length; index += 1) {
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
