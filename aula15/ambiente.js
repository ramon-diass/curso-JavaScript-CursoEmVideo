let num = [6, 2, 8, 4]
console.log('--------------------')
console.log(num)
console.log('--------------------')
num[4] = 5
console.log(num)
console.log('--------------------')
num.push(12)
num.push(10)
console.log(num)
console.log('--------------------')
console.log(`O primeiro elemento é o número ${num[0]}`)
console.log(`O vetor tem ${num.length} valores.`)
let pos = num.indexOf(8)
console.log(`O número 8 está na posição ${pos}`)
console.log(`Organizando em ordem crescente fica ${num.sort()}`)
num.sort(function(a,b){
    return a - b
})
console.log(`Organizando em ordem crescente fica ${num}`)