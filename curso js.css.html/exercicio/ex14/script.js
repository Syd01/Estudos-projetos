function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 9//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora<12) {
        img.src='fotomanha.png'
        document.body.style.background ='#f6b082'
        window.alert('Bom Dia!.')
    }
    else if (hora>=12 && hora<18) {
        img.src='fototarde.png'
        document.body.style.background = '#5d607c'
        window.alert('Boa tarde!.')
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background= '#102248'
        Window.alert('Boa Noite!.')
    }
}