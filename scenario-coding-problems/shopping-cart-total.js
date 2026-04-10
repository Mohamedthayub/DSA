function findTheTotalPrice(cart){ 
    let totalPrice = 0;
    for(let i = 0; i<cart.length; i++){
      totalPrice = totalPrice + cart[i].price;
    }
    return totalPrice;
}
const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Shoes", price: 1000, quantity: 1 },
  { name: "Cap", price: 200, quantity: 3 }
];
console.log(findTheTotalPrice(cart));

/*
1. 🛒 Shopping Cart Total

You are building a simple cart system.

👉 Given:

const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Shoes", price: 1000, quantity: 1 },
  { name: "Cap", price: 200, quantity: 3 }
];

👉 Task:
Calculate the total price of the cart.
*/