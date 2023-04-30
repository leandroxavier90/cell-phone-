const companies = [
    {name: 'samsung', marketValue: 50, CEO:'kin yon suk',foundeOn:1938 },
    {name: 'microsoft', marketValue: 415, CEO:'satya nadela',foundeOn: 1975 },
    {name: 'spotify', marketValue: 117, CEO:'brian kzask',foundeOn: 1968 },
    {name: 'intel', marketValue: 383, CEO:'mark zukenberg',foundeOn: 2004 },
    {name: 'facebook', marketValue: 30, CEO:'daniel ek',foundeOn:2006  },
    {name: 'apple', marketValue: 845, CEO:'daniel     ek',foundeOn: 1976  }
];


const sum = (acc,current) => (acc + (current.marketValue),0); 
const myreduce = companies.map(sum) 

   
 console.log(myreduce)