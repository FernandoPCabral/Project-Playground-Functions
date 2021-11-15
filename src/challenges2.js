// Desafio 10
function techList(array, name) {
  // seu código aqui

  let novoArr = [];

  for(index = 0; index < array.length; index += 1){
    
    function alterandoArr(){
      novoArr.push({
        tech: array[index],
        name: name,
      })
    }
    
    array.forEach(alterandoArr())
    
    function ordenar(novoArr){
      if(novoArr.tech < novoArr.tech){
        return -1
      }
      else if(novoArr.tech > novoArr.tech){
        return 1
      }
      else{
        return 0
      }
    }
  }

  if(array.length != 0){
    return novoArr.sort(ordenar())
  }
    
  else {
    return "Vazio!"
  }
};

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
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
