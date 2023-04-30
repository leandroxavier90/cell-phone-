const students =[
    {name: 'joao', age: 17},
    {name: 'ana', age: 12},
    {name: 'pedro', age: 18},
    {name: 'bia', age: 16},
    {name: 'bruno', age: 19},
    {name: 'joel', age: 11},
    {name: 'rodolfo', age: 14},
    {name: 'leandro', age: 15},
    {name: 'bruna', age: 12},
    {name: 'larissa', age: 15}
]; 
let allstudents = 0
  students.forEach((alunos,index)=>{console.log(alunos,index )
    allstudents = allstudents + alunos.age })
    const result= allstudents / students.length
       //  console.log(alunos,index)