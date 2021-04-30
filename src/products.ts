export interface Product  {
    name: string;
    price: number;
}

let products: Product[] = [];
products.push({name: "pencil", price: 10});
products.push({name: "pen", price: 15});
products.push({name: "eraser", price: 5});
products.push({name: "paper clip", price: 1});
products.push({name: "scissors", price: 74});

export function calcAverageProductPrice(productsArray: Product[]):number {
    let sum:number = 0;
    for (let product of productsArray) {
        sum += product.price;
    }
    if (productsArray.length === 0) {
        return 0;
    }
    return sum/productsArray.length;
}

let average:number = calcAverageProductPrice(products);
console.log(average);