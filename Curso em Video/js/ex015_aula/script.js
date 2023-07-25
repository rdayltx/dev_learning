function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //  Criança
                img.setAttribute('src', 'img/crianca-M.png')
            } else if (idade >= 10 && idade < 21) {
                //  Jovem
                img.setAttribute('src', 'img/adolescente-M.png')
            } else if (idade >= 21 && idade < 50) {
                //  Adulto
                img.setAttribute('src', 'img/adulto-M.png')
            } else {
                //  Idoso
                img.setAttribute('src', 'img/idoso-M.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //  Criança
                img.setAttribute('src', 'img/crianca-F.png')
            } else if (idade >= 10 && idade < 21) {
                //  Jovem
                img.setAttribute('src', 'img/adolescente-F.png')
            } else if (idade >= 21 && idade < 50) {
                //  Adulto
                img.setAttribute('src', 'img/adulto-F.png')
            } else {
                //  Idoso
                img.setAttribute('src', 'img/idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}