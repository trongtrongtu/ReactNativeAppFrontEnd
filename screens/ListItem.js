import React from 'react'
import { Provider } from 'react-redux';
import store from '../store';
import BasicFlatList from '../components/BasicFlatList';

export default function CategoryListItem() {
    return (
        <Provider store={store}>
            <BasicFlatList />
        </Provider>
    );
}