function verificar(){
    var nasc = document.getElementById('ano')
    nasc = Number(nasc.value)
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - nasc
    var res = document.getElementById('res')
    var foto = document.querySelector('img#foto')
    if (nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Dados digitados incorretamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'hcriança.png'
            } else if (idade < 22) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'hadolescente.png'
            } else if (idade < 60) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'hadulto.png'
            } else {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'hidoso.png'
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'mcriança.png'
            } else if (idade < 22) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'madolescente.png'
            } else if (idade < 60) {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'madulto.png'
            } else {
                res.innerHTML = `Dectamos ${genero} de ${idade} anos.`
                foto.src = 'midoso.png'
            }
        }
    }
}