const companies = [
    {name: 'samsung', marketValue: 50, CEO:'kin yon suk',foundeOn:1938 },
    {name: 'microsoft', marketValue: 415, CEO:'satya nadela',foundeOn: 1975 },
    {name: 'spotify', marketValue: 117, CEO:'brian kzask',foundeOn: 1968 },
    {name: 'intel', marketValue: 383, CEO:'mark zukenberg',foundeOn: 2004 },
    {name: 'facebook', marketValue: 30, CEO:'daniel ek',foundeOn:2006  },
    {name: 'apple', marketValue: 845, CEO:'daniel     ek',foundeOn: 1976  }
] 


 const add10MarkValue = company =>{ company.marketValue = company.marketValue + company.marketValue/10
  return company
};
 const oldcompanies = company=> company.foundeOn < 2000;
 
const sumvalue = (acc,company)=>  acc + company.marketValue;


 const newCompanies = companies.map(add10MarkValue)
                               .filter(oldcompanies) 
                               .reduce(sumvalue,0)
    
 
 console.log(newCompanies)