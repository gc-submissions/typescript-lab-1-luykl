import { Product } from "./products"

export interface InventoryItem  {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [];
inventory.push({product: {name: "motor", price: 10}, quantity:10});
inventory.push({product: {name: "sensor", price: 12.5}, quantity:4});
inventory.push({product: {name: "LED", price: 1}, quantity:20});

export function calcInventoryValue(inventoryArray: InventoryItem[]):number {
    let total:number = 0;
    for (let item of inventoryArray) {
        let itemTotal:number = item.product.price * item.quantity;            total += itemTotal;
        }
    return total;  
    }
    
    

let totalValue:number = calcInventoryValue(inventory);
console.log(totalValue); 