
console.log('Iniciando Contagem...')
var ninicio = 100
console.log("Inicio ", ninicio)
var nfim = 1
console.log("Fim ", nfim)
var npasso = 3
console.log("Passo ", npasso)



if (ninicio <= 0 || nfim <= 0 || npasso <= 0) {
    console.log('[ERRO] Verifique os dados e tente novamente!')
} else if (ninicio > nfim) {
    //  i recebe ninicio enquandto i for menor que o nfim i recebe i + passo
    for(var i=ninicio; i>=nfim; i=i-npasso){
        console.log(`Contando... ${i}`)
        console.log(`${i} 👉 `)
    }
} else {
    for(var i=ninicio; i<=nfim; i=i+npasso){
        console.log(`Contando... ${i}`)
        console.log(`${i} 👉 `)
    }
    }
console.log('🚩')
console.log(`FIM!...`)
