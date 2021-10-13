var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var img = window.document.getElementById('img')

function calcula() {

    var msg = window.document.querySelector('#msg')
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if( hora >= 0 && hora < 12 ) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18 ) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}