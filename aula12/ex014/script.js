function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#a09e4b9d'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#db8b56bb'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#070707'
    }
}