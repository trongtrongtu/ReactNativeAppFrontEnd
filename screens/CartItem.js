import React from 'react'
import Cart from '../screens/Cart2';
import { CartContexts } from '../contexts/Cart'

export default function CategoryListItem() {
    return (
        <CartContexts.Consumer>
            {({ cartItems }) => (
                <Cart cartItems={cartItems} />
            )}
        </CartContexts.Consumer>
    );
}