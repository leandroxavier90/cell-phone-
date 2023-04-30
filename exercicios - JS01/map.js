







const allstudents = student.map((alunos)=>{
    const prohibited = {
      name:alunos.name,
      vip:alunos.vip,
      sector: alunos.vip ? "black" : "green"
          
    } 
    return prohibited
})
console.log(allstudents)

//---------------------------------------------------------------------------------------------------

const student = [
  { name: "rodolfo", testgrade: 7},
  { name: "maria", testgrade:  20},
  { name: "ana", testgrade: 3},
  { name: "carla", testgrade: 5},
  { name: "bia", testgrade: 8},
  
];

const allstudens = student.map(alunos=> {
   let approvedOrNot 
   if(alunos.testgrade >= 7) approvedOrNot = 'aprovado' 
   else {approvedOrNot ='nao foi aprovado'};
    
const newlistwithresult = {
  name:alunos.name,
  resultfinal:approvedOrNot
}

    return newlistwithresult
  }  )
   console.log(allstudens)














   // const allstudent = student.map(alunos=> {
    //    const fest ={name:alunos.name,
    //                  vip:alunos.vip,
   //                 setor: alunos.vip ? ' black' : 'green' }
 //       
 //         return fest
   // })
   // console.log(allstudent)


          
    











