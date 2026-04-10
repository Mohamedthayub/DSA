function findMostExpensive(products){
    let expensiveProduct = products[0].price;
    for(let i  = 0 ;i<products.length; i++){
        if(products[i].price > expensiveProduct){
            expensiveProduct = products[i].price;
        }
    }
    return expensiveProduct;
}

const products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 }
];
console.log(findMostExpensive(products));
/*
3. 📱 Find Most Expensive Product

You are building an e-commerce app.

👉 Given:

const products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 }
];

👉 Task:
Find the most expensive product name

*/