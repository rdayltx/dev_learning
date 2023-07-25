/*let valores = [8,1,7,4,2,9]

console.log(valores)

for (let pos=0; pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
*/

let num = [8,1,7,4,2,9]
//   For "Indice" in "Variavel composta", só funciona para array e objetos (Todo array em Js é um object)
//  Para cada posição em num
for(let pos in num){
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}

