function multiplicar() {
    var n = Number(document.querySelector('input[name="ninput"]').value)
    var res = document.querySelector('select#seltab')
    var multres = n
    //  Limpa todo o conteudo de res
    res.innerHTML = ''
/*
    //  remove o nó a partir do pai
    var fchild = document.getElementById("opts")
    fchild.parentNode.removeChild(fchild)
    //res.removeChild(fchild)
*/
    if (n == 0) {
        window.alert('Por favor digite um número!')
    } else {
        for (var i=1; i<=10; multres=n*i){
            // result recebe a criação do elemento option
            var result  = document.createElement('option')
            //  result recebe o valor de multres
            result.value = multres
            //  cria uma id para o option criado
            result.id = 'opts'
            // result recebe texto de multres
            result.textContent = (`${n} x ${i} = ${multres}`)
            //  i receb i para incrementar um passo
            i++
            //  res recebe um filho result
            res.appendChild(result)
        }
    }
}