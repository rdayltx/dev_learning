function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var msg = window.document.getElementById('msg') 
    var inputidade = window.document.querySelector('input#ano')
    var anonascimento = Number(inputidade.value)
    var idade = anoatual - anonascimento
    var img = window.document.getElementById('profile')
    var sexo = document.querySelector('input[name="sexselector"]:checked').value;
    img.src = 'img/empty.png'
    
    if (idade >= 1 && idade<= 12) {
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        if (sexo == 'Feminino') {
            img.src = 'img/criança-F.png'
        }
        else {
            img.src = 'img/criança-M.png'
        }

    } else if (idade >= 13 && idade <= 18) {
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        if (sexo == 'Feminino') {
            img.src = 'img/adolecente-F.png'
        }
        else {
            img.src = 'img/adolecente-M.png'
        }

    } else if (idade >= 19 && idade <= 60) {
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        if (sexo == 'Feminino') {
            img.src = 'img/adulto-F.png'
        }
        else {
            img.src = 'img/adulto-M.png'
        }

    } else if (idade >= 51 && idade <= 200) {
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        if (sexo == 'Feminino') {
            img.src = 'img/idoso-F.png'
        }
        else {
            img.src = 'img/idoso-M.png'
        }
    } else if (idade >= 201) {
        msg.innerHTML = `Alguém com ${idade} anos está morto!`
        img.src = 'img/mumia.png'
    } else {
        msg.innerHTML = `Alguém com ${idade} anos não nasceu!`
        img.src = 'img/esperm.png'
    }
    
}