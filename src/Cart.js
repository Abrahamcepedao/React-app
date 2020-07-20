import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart({ initialItems }){
    const [items, setItems] = useState(initialItems);
    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id){
                return { ...item, qty: newQty};
            }
            return item;
        })
        setItems(newItems);
    }
    const grandTotal =  items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(2);

    return (
        <div className="Cart">
            <h1>Shopping cart</h1>
            <div className="Cart-items">
                {items.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
            <h3>Grand total: ${grandTotal}</h3>
        </div>
    )
}

export default Cart;