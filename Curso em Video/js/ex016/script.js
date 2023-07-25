function startcount() {
    
    console.log('Iniciando Contagem...')
    var ninicio = Number(document.querySelector('input[name="ninicio"]').value)
    console.log("Inicio ", ninicio)
    var nfim = Number(document.querySelector('input[name="nfim"]').value)
    console.log("Fim ", nfim)
    var npasso = Number(document.querySelector('input[name="npasso"]').value)
    console.log("Passo ", npasso)
    var resu = document.getElementById('result')
    resu.innerHTML = ('Contando: <br>')
    resu.style.color = ''

    //  Se passo for igual a 0 define 1 como passo
    if (npasso == 0) {
        npasso = 1
        resu.innerHTML = ('<p id="invalidstep"><strong>Passo invalido. Cosniderando passo 1.</strong></p>')
    }

    if (ninicio <= 0 || nfim <= 0 || npasso < 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        resu.innerHTML = ('<p id="invalidstep"><strong>[ERRO] Verifique os dados e tente novamente!</strong></p>')
        resu.style.color = "red"
    } else if (ninicio > nfim) {
        //  i recebe ninicio enquandto i for maior que o nfim i recebe i - passo
        for(var i=ninicio; i>=nfim; i-=npasso){
            console.log(`Contando... ${i}`)
            resu.innerHTML += (`${i} 👉 `)
        }
    } else {
        //  i recebe ninicio enquandto i for menor que o nfim i recebe i + passo
        for(var i=ninicio; i<=nfim; i+=npasso){
            console.log(`Contando... ${i}`)
            resu.innerHTML += (`${i} 👉 `)
        }
    }
    resu.innerHTML += ('🚩')
}
