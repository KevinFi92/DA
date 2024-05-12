let menues = [
    {
        name: "Pizza Margherita",
        price: 8.0,
        text: "mit Tomatensauce, Gouda und Salami",
        img: "./img/pizza_mag.png",
    },
    {
        name: "Pizza Salami",
        price: 9.0,
        text: "mit Tomatensauce, Gouda und Salami",
        img: "./img/pizza_salami.png",
    },
    {
        name: "Pizza Prosciutto",
        price: 10.5,
        text: "mit Tomatensauce, Gouda und Salami",
        img: "./img/pizza_prosciutto.png",
    }
]
let basket = []
let prices = []

function render(){

    document.getElementById('menu').innerHTML="";
for (let i = 0; i < menues.length; i++) {
    document.getElementById('menu').innerHTML+=
    `<div class="card"><div class="info"><div id="name${i}">${menues[i].name}</div>
    <div id="price${i}">${menues[i].price}</div><div id="text${i}">${menues[i].text}</div></div>
    <div><img class="img" src="${menues[i].img}"></div><div><button onclick="addToBasket(${i})">X</button>
    </div></div>`;
}
document.getElementById('basket').innerHTML= "";


for (let i = 0; i < basket.length; i++) {
    document.getElementById('basket').innerHTML+= `<div><div class="item">${basket[i]}</div>
    <div class="price">${prices[i]}</div></div>`;
    
}

}

function addToBasket(i){

let item = document.getElementById(`name${i}`).innerHTML;
let price = document.getElementById(`price${i}`).innerHTML;


basket.push(item);
prices.push(price);
sum();
render();

}

function sum(){

let totalBasket = 0;

for (let i = 0; i < prices.length; i++) {
    totalBasket += prices[i];
    }

document.getElementById('summe').innerHTML = totalBasket;
console.log(totalBasket);
}