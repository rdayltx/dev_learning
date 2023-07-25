// Concatenação
Number.parseInt // para numeros inteiros
Number.parseFloat // para numeros flutuantes
Number // para detectar automaticamente o tipo

var s = 'JavaScript'
'Eu estou aprendendo s' // não faz interpolação
'Eu estou aprendendo' + s // usa concatenação
`Eu estou aprendendo` // usa template string


var s = 'JavaScript'
s.length // quantos caracteres a string tem
s.toUpperCase() // tudo para 'MAIÚSCULAS'
s.toLowerCase() // tudo para 'minúsculas'



// Formatando Números
var n1 = 1543.5
n1
n1.toFixed(2)
// Mostrar valor em Reais brasileiros
n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) 


//              Aula #7
//  +   Adição
//  -   Subtração
//  *   Multiplicação
//  /   Divisão
//  %   Resto da divisão inteira
//  **  Potência

//  Ordem de precedencia dos operadores aritimeticos
  
//  ()
//  **
//  *   /   %
//  +   -


//              Aula #8

//      Relacionais

//  >   Maior que
//  <   Menor que
//  >=  Maior ou igual que
//  <=  Menor ou igual que
//  ==  Igual
//  !=  Diferente
//  === Identico

//      Lógicos

//  !   Negação ( Não )
//  &&  Conjunção   ( True and True )
//  ||  Disjunção   ( OU )

//  Prioridade de execução:
//  Aritimetico
//  Relacionais
//  " ! ", " && ", " || "

//  Ternário

//  condition ? opção1 : opção2  // Se for verdadeiro opção1 se for falso opção2


// Modulo DOM

// Árvore DOM

//          ->  location                ->  body
//  window  ->  document    ->  html    ->  head
//          ->  history