const companies = [
    {name: 'samsung', marketValue: 50, CEO:'kin yon suk',foundeOn:1938 },
    {name: 'microsoft', marketValue: 415, CEO:'satya nadela',foundeOn: 1975 },
    {name: 'spotify', marketValue: 117, CEO:'brian kzask',foundeOn: 1968 },
    {name: 'intel', marketValue: 383, CEO:'mark zukenberg',foundeOn: 2004 },
    {name: 'facebook', marketValue: 30, CEO:'daniel ek',foundeOn:2006  },
    {name: 'apple', marketValue: 845, CEO:'daniel     ek',foundeOn: 1976  }
]
const newCompanies= companies.filter((ceo) => {
       if (ceo.foundeOn > 1975 && ceo.marketValue > 200) return true
       
     })
 console.log(newCompanies)












   //const newList = list.filter((numbers)=>{
    //  if(numbers % 2 === 0 && numbers % 5 === 0) 
    
    // return list
 //   })
 //  console.log(newList)


  // const list = [20,3,234,12,17,541,6,87,275,1000];






















//const newList = companies.filter(compani=>{
    
//     if(compani.foundeOn <= 1975) return false
 //    if(compani.marketValue <= 200)  return false 
  //        return companies            

//})  
// console.log(newList) 