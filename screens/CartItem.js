import React from 'react'
import Cart from './Cart';
import { CartContexts } from '../contexts/Cart'

export default function CategoryListItem() {
    return (
        <CartContexts.Consumer>
            {({ cartItems, selectAll }) => (
                <Cart cartItems={cartItems} selectAll={selectAll} />
            )}
        </CartContexts.Consumer>
    );
}