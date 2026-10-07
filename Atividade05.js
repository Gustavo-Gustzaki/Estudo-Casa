const notasAluno = [
    {id: 1, nota: 6},
    {id: 2, nota: 9},
    {id: 3, nota: 6},
];
let resultado = (notasAluno[0].nota + notasAluno[1].nota + notasAluno[2].nota) /3
let soma = notasAluno[0].nota + notasAluno[1].nota + notasAluno[2].nota 

if(resultado >= 7){
    console.log(notasAluno)
    console.log(`Soma das notas: ${soma}`)
    console.log(`Resultado: ${resultado.toFixed(2)}`)
    console.log("Parabens, esta aprovado!")
}
else{
    console.log(notasAluno)
    console.log(`Soma das notas: ${soma}`)
    console.log(`Resultado: ${resultado.toFixed(2)}`)
    console.log("Vixi, Reprovado!")
}