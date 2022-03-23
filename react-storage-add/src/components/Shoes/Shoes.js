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

export default Shoes;