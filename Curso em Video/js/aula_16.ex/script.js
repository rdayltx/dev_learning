let n = []
let inputnumber = document.querySelector('input[name="inumber"]')
let res = document.querySelector('select#valueadd')
let calcresult = document.querySelector('div#calcresult')

function adicionar() {
    let inpnumber = Number(inputnumber.value)
    //let inpnumber = Number(document.querySelector('input[name="inumber"]').value)

    var result = document.createElement('option')

    findnumber = n.indexOf(inpnumber)

    if (inpnumber <= 0 || inpnumber > 100 || findnumber != -1) {
        calcresult.innerHTML = `ERRO: Valor invalido ou já encontrado na lista`
    } else {
        console.log(inpnumber)
        n.push(inpnumber)
        let optN = inpnumber
        //result.value = `Valor ${optN} adicionado.`
        //result.textContent = `Valor ${optN} adicionado.`
        result.innerHTML += `Valor ${optN} adicionado.`
        res.appendChild(result)
        calcresult.innerHTML = ``
        
    }
    console.log(n)

    inputnumber.value = ``
    inputnumber.focus()

}
adicionar()
function analisar() {
    console.log(`work's ${n}`)
    let indice = n.length
    console.log(`Largura ${indice}`)
    n.sort(function(a, b) {
        return a - b;
      })
    let soma = Number('')
    console.log(n)

    for (i=0; i < n.length; i++){
        soma += n[i]
    }
    
    let media = soma / indice

    calcresult.innerHTML += `<p>Ao todo temos ${indice} cadastrados.</p>`
    calcresult.innerHTML += `<p>O menor valor encontrado foi ${n[0]}.</p>`
    calcresult.innerHTML += `<p>O maior valor encontrado foi ${n[indice - 1]}.</p>`
    calcresult.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    calcresult.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(3)}.</p>`
}