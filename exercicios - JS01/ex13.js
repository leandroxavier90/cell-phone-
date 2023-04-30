const  students =[
    { name: 'rodolfo', testGrade: 7 },
    { name: 'maria', testGrade: 8},
    { name: 'ana', testGrade: 4 },
    { name: 'carla', testGrade: 6 },
    { name: 'bia', testGrade: 9},
    { name: 'roberto', testGrade: 2 },
    { name: 'bianca', testGrade: 10}
  ]
 const result = students.map((alunos) =>{
       
        let approvedOrNot

         if(alunos.testGrade >= 7)  approvedOrNot = 'esta aprovado'
         else {approvedOrNot = 'nao esta aprovado'};

     const newlistwithresult ={
        name:alunos.name,
        finalResult:approvedOrNot
     }     
         return newlistwithresult
     
 })
    console.log(result)