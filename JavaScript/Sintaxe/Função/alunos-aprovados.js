/* lista de alunos */
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Eve',
    nota: 8,
    turma: '3C'
  },
  {
    nome: 'Iule',
    nota: 4,
    turma: '7D'
  },
  {
    nome: 'Jui',
    nota: 3,
    turma: '7H'
  },
];

function alunosAprovados(arr, media) {
  /* array axiliar para manter os alunos aprovados */
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    
    /* usando object destructured - desestruturados */
    const {nota, nome} = arr[i];
    
    /* se tiver nota maior */
    if (nota >= media){
      /* adicionando nome aluno */
      aprovados.push(nome);
    }
  }
  return aprovados;
}
console.log(alunosAprovados(alunos, 5));