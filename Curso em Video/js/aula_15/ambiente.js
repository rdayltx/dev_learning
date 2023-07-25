let num = [5, 8, 4]
num.push(12) //  Adiciona valor a ultima posição

num[6]='DayLight'   //  Adiciona valor ao index escolido
console.log(`Nosso vetor é o ${num}`)

num.length  //  Comprimento
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

num.sort()  //  Ordena os valores em ordem crecente
console.log(`Nosso vetor ordenado é ${num}`)

//  Verifica se o valor 8 existe na variavel composta
pos = num.indexOf(8) //   Retorna a chave/posição (index) onde o valor está
//  Se não encontrar o valor ele retorna -1
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
