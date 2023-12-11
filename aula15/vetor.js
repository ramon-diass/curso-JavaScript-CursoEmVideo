var vetor = [5, 7, 2, 0, 6]
for (let pos=0; pos < vetor.length; pos++) {
    console.log(`Na posição ${pos} tem o valor ${vetor[pos]}.`)
}
console.log('-------------------')
for (let pos in vetor) {
    console.log(`Na posição ${pos} tem o valor ${vetor[pos]}.`)
}