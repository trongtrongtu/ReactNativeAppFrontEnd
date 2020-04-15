import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

import { updateAProduct } from '../networking/Server';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDescription: ''
        };
    }
    showEditModal = (editingProduct, flatlistItem) => {        
        this.setState({
            key: editingProduct._id,
            productName: editingProduct.name,
            productDescription: editingProduct.productDescription,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>product's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ productName: text })}
                    placeholder="Enter product's name"
                    value={this.state.productName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => this.setState({ productDescription: text })}
                    placeholder="Enter product's description"
                    value={this.state.productDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.productName.length == 0 || this.state.productDescription.length == 0) {
                            alert("You must enter product's name and description");
                            return;
                        }
                        let params = {
                            product_id: this.state.key,
                            name: this.state.productName,
                            productDescription: this.state.productDescription
                        };
                        updateAProduct(params).then((result) => {
                            console.log(`this.state.flatlistItem = ${this.state.flatlistItem}`);
                            if (result === 'ok') {
                                this.state.flatlistItem.refreshFlatListItem({
                                    _id: this.state.key,
                                    name: this.state.foodName,
                                    productDescription: this.state.productDescription
                                });
                                this.refs.myModal.close();
                            }
                        }).catch((error) => {
                            console.log(`error = ${error}`);
                            this.refs.myModal.close();
                        });                                                                      
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}