function contar() {
    var inicio = document.querySelector('input#ini')
    var ini = Number(inicio.value)
    var tfim = document.querySelector('input#fim')
    var fim = Number(tfim.value)
    var passo = document.querySelector('input#pas')
    var pas = Number(passo.value)
    var resposta = document.querySelector('p#res')
    resposta.innerHTML = 'Preparando a contagem...'
    if (inicio.value.length == 0 || tfim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = 'Impossível contar!'
    } else {
        resposta.innerHTML = 'Contando:<br>'
        if (pas <= 0) {
            pas = 1
            window.alert('Passo inválido! Considerando passo 1.')
        }
        if (fim > ini) {
            //Contagem crescente
           for (var c = ini ; c <= fim ; c += pas) {
             resposta.innerHTML += `${c} \u{1F449} `
            } 
        } else if (ini > fim) {
            //Contagem decrescente
            for (var c = ini ; c >= fim ; c -= pas) {
                resposta.innerHTML += `${c} \u{1F449} `
            }
        }
        
        resposta.innerHTML += `\u{1F3C1}`
    }
}