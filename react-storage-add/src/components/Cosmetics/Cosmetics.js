import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
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


    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);



    // way-3: fetch data from our 'data' which is hosted in online

    /*
    const [cosmetics, setCosmetics] = useState([]);

     
    useEffect(() => {
        fetch('https://6239c647bbe20c3f66c9bebd.mockapi.io/cosmetics')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []); 
    */

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

export default Cosmetics;