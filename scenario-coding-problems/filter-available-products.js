function filterAvailableProducts(items){
    let availableProducts = [];
    for(let i = 0; i<items.length; i++){
        if(items[i].stock > 0){
            availableProducts.push(items[i]);
        }
    }
    return availableProducts;
}
const items = [
  { name: "Pen", stock: 10 },
  { name: "Book", stock: 0 },
  { name: "Pencil", stock: 5 }
];
console.log(filterAvailableProducts(items));
/*
6. 📦 Filter Available Products

Inventory system:

👉 Given:

const items = [
  { name: "Pen", stock: 10 },
  { name: "Book", stock: 0 },
  { name: "Pencil", stock: 5 }
];

👉 Task:
Return only items that are in stock
*/