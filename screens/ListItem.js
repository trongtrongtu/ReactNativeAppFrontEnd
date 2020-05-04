import React, { Component } from 'react'
import BasicFlatList from '../components/BasicFlatList';

export default class CategoryListItem extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <BasicFlatList />
        );
    }
}