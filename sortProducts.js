
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
    const sortProducts = ()=>{
        const sorted = products.sort((a,b)=> a.price-b.price);
        return sorted;
    }
    console.log(sortProducts());