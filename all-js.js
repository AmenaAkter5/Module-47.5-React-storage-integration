
// app function

import './App.css';
import Shoes from './components/Shoes/Shoes';

function App() {
    return (
        <div className="App">
            <Shoes></Shoes>
        </div>
    );
}

// export default App; [এটা মূল file এ থাকবে]


// ===================================


// Shoes component

import React from 'react';

// default value import
// import add from './../../utilities/calculate';

// object আকারে import

// import { add } from '../../utilities/calculate'; [single একটা function import করে দেখানো হলো]

import { add, divide, multiply, substract } from '../../utilities/calculate';

const Shoes = () => {

    // add, multiply, substract, divide function import করে এনে use করা হলো

    const first = 11;
    const second = 13;

    const result = multiply(first, second);
    const sum = add(first, second);
    const minus = substract(first, second);

    const localMember = 200;
    const everyOneGet = 5;
    const dividedPackets = divide(localMember, everyOneGet);

    return (
        <div>
            <h3>This is Shoes Component</h3>
            <p>Result: {result} and Total: {sum}</p>
            <p>Substract Value: {minus}</p>
            <p>Everybody get the packet: {dividedPackets}</p>
        </div>
    );
};

// export default Shoes; [এটা মূল file এ থাকবে]


// ====================================


// utilities --> calculate

const add = (first, second) => {
    return first + second;
}


const multiply = (first, second) => {
    return first * second;
}

const substract = (first, second) => {
    return first - second;
}

const divide = (first, second) => {
    return first / second;
}

// default export
// export default add;


// একাধিক export
export { add, multiply, substract, divide };


















// data create and access
// =======================

// '1'. array of object

// App function

import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';

function App() {
    return (
        <div className="App">
            <Cosmetics></Cosmetics>
        </div>
    );
}

// export default App; [এটা মূল file এ থাকবে]



// ========================================


// Cosmetics component 

import React from 'react';
import Cosmetic from './../Cosmetic/Cosmetic';

const Cosmetics = () => {

    // way-1 : array of object
    /* 
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Lipstick', price: 200 },
        { id: 3, name: 'Make up', price: 300 },
        { id: 4, name: 'Nail polish', price: 400 },
        { id: 5, name: 'Eye Shadow', price: 500 }
    ]; 
    */


    // generated data

    /* 
    const cosmetics = [
        {
            "id": "6239b7d78a92275b732efedf",
            "price": 500,
            "eyeColor": "brown",
            "name": "Berg Meyers"
        },
        {
            "id": "6239b7d700fd5e4b09633adb",
            "price": 76,
            "eyeColor": "blue",
            "name": "Jocelyn Giles"
        },
        {
            "id": "6239b7d7fa8b4142b2203853",
            "price": 206,
            "eyeColor": "green",
            "name": "Elsie Yang"
        },
        {
            "id": "6239b7d77fd8fb972fd0c86f",
            "price": 561,
            "eyeColor": "green",
            "name": "Stone Saunders"
        },
        {
            "id": "6239b7d7836e540ac4fe391e",
            "price": 49,
            "eyeColor": "green",
            "name": "Acevedo Russo"
        }
    ] 
    */

    // way-2: fetch data from our 'data.json' file

    /* 
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []); 
    */


    // way-3: fetch data from our 'data' which is hosted in online

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('https://6239c647bbe20c3f66c9bebd.mockapi.io/cosmetics')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

// export default Cosmetics; [এটা মূল file এ থাকবে]



// ==============================================


// Cosmetic component

import React from 'react';


// without destrucring

/* 
const Cosmetic = (props) => {
    return (
        <div>
            <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Only for ${props.cosmetic.price}</p>
        </div>
    );
}; 
*/


// with destructuring

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;

    // btn event handler
    const addToCart = (id) => {
        // localStorage.setItem(id, 1);
        addToLocalStorage(id);
    }

    // handle add btn event with parameter
    // const addToCartWithParam = () => addToCart(id);

    // remove button handler
    const removeFromCart = id => {
        removeFromStorage(id);
    }

    return (
        <div className="product">
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}

            {/* shortcut */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

// export default Cosmetic; [এটা মূল file এ থাকবে]


// Own CSS
// ===========
/* 
.product{
    border: 2px solid navy;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
} 
*/


// ===============================================


// utilities --> cart-storage.js

// use local storage to manage cart data

// local storage কে database হিসেবে use করছি।
// যাকে add করবো তার id কে parameter হিসেবে নিবো

// storage এ কোন item আছে কিনা তা আমরা check করতে পারি:

// console এ গিয়ে localStorage.getItem('...') --> enter


// previous local storage function [unorganized system]

/* 
const addToLocalStorage = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;

        localStorage.setItem(id, newQuantity);
    }
    else {
        localStorage.setItem(id, 1);
    }
} 
*/


// organized local storage cart

const addToLocalStorage = id => {

    let shoppingCart;

    // get the shopping Cart from local storage
    // [shopping cart টা আছে কিনা check করছি]
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {}
    }

    // add quantity
    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}



// remove from cart

const removeFromStorage = id => {

    // shopping cart টা আছে কিনা check করবো
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};


// যদি shopping cart remove করতে চাই local storage বা database থেকে

const deleteLocalStorageCart = () => {
    localStorage.removeItem('shopping-cart');
};



// export
// export { addToLocalStorage, removeFromStorage, deleteLocalStorageCart };


// fancy export style
/* 
export { 
    addToLocalStorage, 
    removeFromStorage,
    deleteLocalStorageCart 
}; 
*/



// =======================================

// utilities --> calculate.js

// array reduce

const numbers = [20, 24, 235, 65, 89];

// array sum process [for loop]
let sum = 0;
for (let i = 0; i >= numbers.length; i++) {
    sum = sum + numbers[i];
}

// reduce

const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0);


// array of object : reduce

const items = [
    { id: 1, name: 'Alta', price: 100 },
    { id: 2, name: 'Lipstick', price: 200 },
    { id: 3, name: 'Make up', price: 300 },
    { id: 4, name: 'Nail polish', price: 400 },
    { id: 5, name: 'Eye Shadow', price: 500 }
];

const itemsSumReducer = (previous, current) => previous + current.price;
const itemsTotal = items.reduce(itemsSumReducer, 0);


// এবার আমরা Cosmetics এর total price টা বের করে ফেলবো

const getTotalPrice = cosmetics => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetics.reduce(reducer, 0);
    return total;
}

// shortcut name export system [shorcut name ই import করবে অন্য file]
export { add, multiply, substract, divide, getTotalPrice as getTotal };



// getTotal কে Cosmetics.js file এ import করবো

// total টা কে এখানে use করা হলো।
// array reduce method দেখা হলো।



const Cosmetics2 = () => {

    // way - 2: fetch data from our 'data.json' file

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            <h3>Money Needed: {total}</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};



