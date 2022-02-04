function allProduct(product) {
    let totalPrice = 0;
    for (let i = 0; i < product.length; i++) {
        totalPrice = totalPrice + (product[i].price * product[i].quantity);
    }
    console.log(totalPrice);
}

let product = [
    { name: 'laptop', price: 30000, quantity: 1 },
    { name: 'phone', price: 3000, quantity: 10 },
    { name: 'shirt', price: 300, quantity: 15 },
    { name: 'watch', price: 500, quantity: 5 }
]
allProduct(product);