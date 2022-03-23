import React from 'react';
import { addToLocalStorage, removeFromStorage } from '../../utilities/cart-storage';
import './Cosmetic.css';


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
        // console.log('item added', id);
        // localStorage.setItem(id, 1);
        addToLocalStorage(id);
    }

    // handle add btn event with parameter
    // const addToCartWithParam = () => addToCart(id);

    // remove button handler
    const removeFromCart = id => {
        // console.log('remove', id);
        removeFromStorage(id);
    }

    return (
        <div className="product">
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            <p>Id: {id}</p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}

            {/* shortcut */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;