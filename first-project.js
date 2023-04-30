const list = [
   {name:"leandro", testGrade: 7},
   {name:"joao", testGrade:5 },
   {name:"pedro", testGrade:8 },
   {name:"ana", testGrade: 9},
   {name:"bia", testGrade: 3},
   {name:"caio", testGrade: 1}]

     const newTest = list.map(names=>{
      let appvedOrNot 
      if(names.testGrade >= 7 ){appvedOrNot = 'approved'}
      else (appvedOrNot = 'disapproved')

       const list = {
         name:names.name,
         testGrade: appvedOrNot}
         return list
       }  )
        console.log(newTest)