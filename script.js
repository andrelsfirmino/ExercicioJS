
let numberOne = prompt("Insira o primeiro número")
let numberTwo = prompt("Insira o segundo número")

let soma = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)

alert(`soma é ${soma}`)
alert(`sub é ${sub}`)
alert(`mult é ${mult}`)
alert(`div é ${div}`)
alert(`rest é ${rest}`)

if(soma % 2 == 0){
  alert("A soma é um número par " + soma)
} else alert("A soma é um número ímpar " + soma)

if(numberOne == numberTwo){
  alert("Os dois números são iguais")
} else alert("Os números são diferentes: " + numberOne + ", " + numberTwo)

let ParImpar = soma%2 == 0 ? 'par' : 'ímpar'
alert("A soma é " + ParImpar)