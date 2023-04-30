const myArray = ['mari','lsni','peri','podre','redre']

myArray.push('le') //.push = adicoana item no array
console.log(myArray.length) // .length = mostra a quantidade de itens no array
console.log(myArray.sort)  //.sort = organiza os itens por ordem alfabetica 
delete myArray[2] // delete = exclui um certo intem do array
myArray.splice(2,3,'')  // splice = tira e coloca itens do array
const newStudents = myArray.slice() // slice = fatiar- ele cria outro array tirando itens do array
myArray.pop()// pop = ele tira o primeiro item do array 
myArray.shift() // shift =  ele tira o ultimo item do array


console.log(myArray)