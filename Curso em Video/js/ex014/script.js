function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //  BOM DIA!
        img.src =' img/manha.jpg'
        document.body.style.background = '#29435a'
    } else if (hora >= 12 && hora <= 18){
        //  BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#f89d7e'
    } else {
        //  BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#082a2b'
    }
}