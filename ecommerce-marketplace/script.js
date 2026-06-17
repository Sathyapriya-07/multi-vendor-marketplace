let products =
JSON.parse(localStorage.getItem("products"))
|| [
{
name:"Laptop",
price:50000
},
{
name:"Phone",
price:15000
},
{
name:"Headphone",
price:2000
}
];

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

function displayProducts(productArray = products){

let output="";

productArray.forEach((product,index)=>{

output += `
<div class="product">
<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button onclick="addToCart(${index})">
Add To Cart
</button>
</div>
`;

});

document.getElementById("productList").innerHTML = output;
}

function addToCart(index){

cart.push(products[index]);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added To Cart");
}

function searchProduct(){

let searchText =
document.getElementById("search")
.value
.toLowerCase();

let filteredProducts =
products.filter(product =>
product.name
.toLowerCase()
.includes(searchText)
);

displayProducts(filteredProducts);
}

displayProducts();