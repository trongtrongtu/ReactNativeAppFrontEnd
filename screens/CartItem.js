import React from 'react'
import { Provider } from 'react-redux';
import store from '../store';
import Cart from '../screens/Cart2';

export default function CategoryListItem() {
    return (
        <Provider store={store}>
            <Cart />
        </Provider>
    );
}