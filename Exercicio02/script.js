let estudantes = [
  {
    nome: "Ernesto",
    nota1: 10,
    nota2: 9
  },
  {
    nome: "Phil",
    nota1: 10,
    nota2: 2,
  },
  {
    nome: "Izabela",
    nota1: 10,
    nota2: 8.5,
  },
]

function mediaEstudante(estudantes){
  let media = (estudantes.nota1 + estudantes.nota2)/2
  return media
}



for (let student of estudantes){
  alert(`A média de ${student.nome} foi ${mediaEstudante(student)}` )
  let resultado = mediaEstudante(student) >= 7 ? alert(`Parabéns ${student.nome}! Você foi aprovado(a) no consurso!`) : alert(`Não foi dessa vez ${student.nome}! Tente novamente!`)
}

for (let student of estudantes){
  if (mediaEstudante(student) >= 7){
    alert(`A média do(a) aluno(a) ${student.nome} é ${mediaEstudante(student)}\nParabéns, ${student.nome}! Você foi aprovado(a)!`)
  } else alert(`A média do(a) aluno(a) ${student.nome} é ${mediaEstudante(student)}\nNão foi dessa vez, ${student.nome}! Tente novamente!`)

}



