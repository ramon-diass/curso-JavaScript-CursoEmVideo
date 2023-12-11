function gerar() {
    var txtnum = document.querySelector('input#txt')
    var tab = document.querySelector('select#seltab')
    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        let num = Number(txtnum.value)
        tab.innerHTML = ''
        for (let c = 1 ; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text += `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}