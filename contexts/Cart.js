import React, { Component } from 'react';

export const CartContexts = React.createContext();

export default class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item){
        console.log("Adding to cart", item);
        this.setState({
            cartItems: this.state.cartItems.concat(item)
        });
    }

    render() {
        return <CartContexts.Provider value={{
            cartItems: this.state.cartItems,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </CartContexts.Provider>
    }
}