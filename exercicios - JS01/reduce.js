  // 4 parametros acc/acumulador
               // current / valor atual
               // index
              //  array completo
  
 // const list = [1,2,3,4,];
 const companies = [
    {name: 'samsung', marketValue: 50, CEO:'kin yon suk',foundeOn:1938 },
    {name: 'microsoft', marketValue: 415, CEO:'satya nadela',foundeOn: 1975 },
    {name: 'spotify', marketValue: 117, CEO:'brian kzask',foundeOn: 1968 },
    {name: 'intel', marketValue: 383, CEO:'mark zukenberg',foundeOn: 2004 },
    {name: 'facebook', marketValue: 30, CEO:'daniel ek',foundeOn:2006  },
    {name: 'apple', marketValue: 845, CEO:'daniel     ek',foundeOn: 1976  }
];
const add10MarkValue = company =>{
    company.marketValue += company.marketValue / 10
      return company
    }
     const oldCompanies = company => company.foundeOn < 2000 
       
      const myreduce =(acc,company)=>acc += company.marketValue
      

  const sum = companies.map(add10MarkValue)
                       .filter(oldCompanies)
                       .reduce(myreduce,0)

                console.log(sum)
    
//-------------------------------------------------------------------------------------------------

   // const mycompanies = companies.filter((company)=>{
   //     if(company.foundeOn < 2000 ) return true 
  //  }
 //   )
  //   console.log(mycompanies)

//-------------------------------------------------------------------------------------------


     // const allcompanies = companies.reduce((acc,company)=> (acc + company.marketValue ),0)
     //    console.log(allcompanies)