import React, { Component } from 'react';
import { Alert } from 'react-native';
export const CartContexts = React.createContext();

export default class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            cartItems: [],
            username: ""
        };
        this.addToCart = this.addToCart.bind(this);
        this.quantityHandler = this.quantityHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.selectHandlerAll = this.selectHandlerAll.bind(this);
        this.userName = this.userName.bind(this);
        this.deleteCart = this.deleteCart.bind(this);
    }

    addToCart(item) {
        let count = 0;
        const newItems = [...this.state.cartItems];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].name == item.name) {
                count = 1;
                let currentQty = Number(newItems[i].quantity);
                newItems[i].quantity = currentQty + 1;
                this.setState({
                    cartItems: newItems
                });
            }
        }
        if (count == 0) {
            this.setState({
                cartItems: this.state.cartItems.concat(item)
            });
        }
        Alert.alert('Thông báo', `Đã thêm ${item.name} vào giỏ hàng!`);
    }
    quantityHandler = (action, index) => {
        const newItems = [...this.state.cartItems];

        let currentQty = Number(newItems[index].quantity);

        if (action == 'more') {
            newItems[index].quantity = currentQty + 1;
        } else if (action == 'less') {
            newItems[index].quantity = currentQty > 1 ? currentQty - 1 : 1;
        }

        this.setState({ cartItems: newItems });
    }

    deleteHandler = (index) => {
        Alert.alert(
            'Are you sure you want to delete this item from your cart?',
            '',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Delete', onPress: () => {
                        let updatedCart = this.state.cartItems;
                        updatedCart.splice(index, 1);
                        this.setState({ cartItems: updatedCart });
                    }
                },
            ],
            { cancelable: false }
        );
    }

    selectHandler = (index, value) => {
        const newItems = [...this.state.cartItems];
        newItems[index]['checked'] = value == 1 ? 0 : 1;
        this.setState({ cartItems: newItems });
    }

    selectHandlerAll = (value) => {
        const newItems = [...this.state.cartItems];
        newItems.map((item, index) => {
            newItems[index]['checked'] = value == true ? 0 : 1;
        });
        this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) });
    }
    userName = (user_name) => {
        this.setState({ username: user_name });
    }
    deleteCart = () => {
        const newItems = [...this.state.cartItems];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].checked == 1) {
                newItems.splice(i, 1);
                i = i -1;
            }
        }
        this.setState({ cartItems: newItems });
    }

    render() {
        return <CartContexts.Provider value={{
            cartItems: this.state.cartItems,
            selectAll: this.state.selectAll,
            username: this.state.username,
            addToCart: this.addToCart,
            quantityHandler: this.quantityHandler,
            deleteHandler: this.deleteHandler,
            selectHandler: this.selectHandler,
            selectHandlerAll: this.selectHandlerAll,
            userName: this.userName,
            deleteCart: this.deleteCart
        }}>
            {this.props.children}
        </CartContexts.Provider>
    }
}