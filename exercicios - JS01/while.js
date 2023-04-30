


//const table = (number) => {
//if (number)
      //  for (let i = 1; i <= 10; i++) { console.log(`${i} x ${number} = ${i * number}`) }
//}

//table(4)


//const table = (number) => {
  ///   if (number) 
     //for (let i = 1; i <= 10; i++)  {console.log(`${i} x ${number} = ${i * number}`) } }
        
   //  const number = (number1,number2) => {
    //  if (number1 > number2) console.log('numero é maior')
    //  else console.log('o numero é menor')  
    // }  
    // number(2,4)


    const people = [{
      
      salary:100,
      children:2,

    },
    {
      
      salary:200,
      children:5,

    },
    {
      
      salary:300,
      children:3,

    },
    {
      
      salary:400,
      children:1,

    },
    {
     
      salary:-0,
      children:-4,

    },
]

    function findAverageAndHighestSalary(peopleinformation){
    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let higherstSalary = 0
     
    while (peopleinformation[i].salary > 0) {
       averageSalary = averageSalary + peopleinformation[i].salary
       averageChildren += peopleinformation[i].numberOfChildren
       peopleinformation[i].salary > higherstSalary ? higherstSalary = peopleinformation[i].salary : higherstSalary = higherstSalary
       i++
    } 
    console.log(`media de salario R$${( averageSalary / i).toFixed(0)}`)
    console.log(`media de flhos  ${(averageChildren / i).toFixed(0)}`)
    console.log(`maior salario R$ ${higherstSalary}`)
} 
  findAverageAndHighestSalary(people)
  //const numbers = [1, 2, 3, 4, 5]
  
  
  
  
  
  ///const newNumber = numbers.map(function (number) {
   // return number + 5
  //})
  
  
  
   // const sum = number => number +4
  ////  const subtract = number => number -1
   // const divide = number => number +4
   // const real = number => `R$ ${number.toFixed(2)} reais de dolares `
                                                             
   // const newNumber2 = numbers.map(sum).map(subtract).map(divide).map(real)
  
  //console.log(newNumber2)
  