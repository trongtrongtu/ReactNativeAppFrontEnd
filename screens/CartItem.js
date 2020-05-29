import React from 'react'
import Cart from './Cart';
import { CartContexts } from '../contexts/Cart'

export default function CategoryListItem() {
    return (
        <CartContexts.Consumer>
            {({ cartItems, selectAll, username }) => (
                <Cart cartItems={cartItems} selectAll={selectAll} username={username} />
            )}
        </CartContexts.Consumer>
    );
}