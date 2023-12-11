var vetor = []
var dados = document.querySelector('p#dados')
var soma = 0

function adicionar() {
    dados.innerHTML = ''
    var txtnum = document.querySelector('input#txtnum')
    var num = Number(txtnum.value)
    var pos = vetor.indexOf(num)
    if (txtnum.value.length == 0 || num <1 || num > 100 || pos != -1) {
        window.alert('Número inválido ou já adicionado!')
    } else {
        vetor.push(num)
        let lista = document.querySelector('p#lista')
        lista.innerHTML += `Valor ${num} adicionado.<br>`
        soma += num
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Não foi adicionado nenhum número!')
    } else {
        dados.innerHTML += `Ao todo, temos ${vetor.length} números cadastrados.<br>`
        vetor.sort(function(a,b){
            return a - b
        })
        dados.innerHTML += `<p>O maior valor informado foi o ${vetor[vetor.length - 1]}.<br></p>`
        dados.innerHTML += `<p>O menor valor informado foi o ${vetor[0]}.<br></p>`
        dados.innerHTML += `<p>Somando todos os valores, temos ${soma}.<br></p>`
        dados.innerHTML += `<p>A média dos valores digitados é ${soma / vetor.length}.</p>`
    }
    
}