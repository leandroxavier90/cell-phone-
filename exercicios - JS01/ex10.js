//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
 //Porém, os dois nomes devem estar em dois objetos separados. 
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true.
// João e Maria, imprime false.
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em um objeto.

const maria = {
    name: "maria",
    age: 18,
    height: 1.7,
    city: "sao paulo",
    country: "brasil"

}

const joao = {
    name: "maria",
    age: 18,
    height: 1.7,
    city: "sao paulo",
    country: "brasil"
}


 console.log(maria.name == joao.name)