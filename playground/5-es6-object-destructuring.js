// Object Destructuring
const product = {
    label: 'Red Notebook',
    price: 20,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
const {label: productLabel, price, stock, rating = 5} = product;
console.log(productLabel);
console.log(price);
console.log(stock);
console.log(rating);

const transaction = (amount, {label, price, stock}) => {
    console.log(amount, label, price, stock);
}
transaction(2000, product);