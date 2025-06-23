
const products = [
  { 
      name: "Apple",
      price: 6 
      
  },
  { 
      name: "Banana",
      price: 1
      },
  { 
      name: "Cherry",
      price: 3
      }
    ];

    const letsSee = ()=>{
      const sorted = products.sort((a,b)=> b.price-a.price); // descending order
    //   const sorted = products.sort((a,b)=> a.price-b.price); // Accending order
     
    return sorted;
    }
    
    console.log(letsSee());