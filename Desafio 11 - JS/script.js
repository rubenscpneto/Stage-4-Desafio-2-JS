const studentList = [
  {
    name: "Rubens",
    gradeOne: 8,
    gradeTwo: 7,
  },
  {
    name: "Maria",
    gradeOne: 4,
    gradeTwo: 6,
  },
  {
    name: "Felipe",
    gradeOne: 10,
    gradeTwo: 6,
  },
  {
    name: "Marcelo",
    gradeOne: 3,
    gradeTwo: 5,
  },
  {
    name: "Natália",
    gradeOne: 10,
    gradeTwo: 9,
  },
  {
    name: "Guilherme",
    gradeOne: 7,
    gradeTwo: 7.5,
  }
]

function calcAverage(gradeOne,gradeTwo) {
  let average = (gradeOne + gradeTwo) / 2
  return average
}

for (let student of studentList) {
  personalAverage = calcAverage(student.gradeOne, student.gradeTwo)
  let approvedOrNot = personalAverage < 7 ? `Não foi dessa vez, ${student.name}! Tente novamente!` : `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`

  alert(`A média do(a) aluno(a) ${student.name} é: ${personalAverage}
  ${approvedOrNot}`)
}