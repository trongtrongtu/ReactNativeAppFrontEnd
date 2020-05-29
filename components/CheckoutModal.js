import React, { Component } from 'react';
import { Text, View, Alert, Platform, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { checkout } from '../networking/Server'

var screen = Dimensions.get('window');
export default class CheckoutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            number: '',
            address: ''
        };
    }
    showAddModal = () => {
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
                    height: 350
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
                }}>Checkout information</Text>
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
                    onChangeText={(text) => this.setState({ username: text })}
                    placeholder="Enter username"
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

                    onChangeText={(text) => this.setState({ number: text })}
                    placeholder="Enter number"
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

                    onChangeText={(text) => this.setState({ address: text })}
                    placeholder="Enter address"
                />
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        style={{ fontSize: 18, color: 'white' }}
                        containerStyle={{
                            padding: 8,
                            marginLeft: 40,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: 'rgb(221, 97, 97)'
                        }}
                        onPress={() => {
                            this.refs.myModal.close();
                        }}>
                        Cancel
                </Button>
                    <Button
                        style={{ fontSize: 18, color: 'white' }}
                        containerStyle={{
                            padding: 8,
                            paddingHorizontal: 12,
                            marginLeft: 15,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: 'mediumseagreen'
                        }}
                        onPress={() => {
                            if (this.state.username.length == 0 || this.state.number.length == 0 || this.state.address.length == 0) {
                                alert("You must enter username, number and address");
                                return;
                            }
                            checkout(this.props.username, this.props.name, this.state.username,  this.state.number, this.state.address, this.props.productDescription, this.props.quantity).then(result => {
                                if (result == 'ok') {
                                    this.props.parentFlatlist.refreshDataFromServer();
                                }
                            })
                            this.refs.myModal.close();
                        }}>
                        Order
                </Button>
                </View>
            </Modal>
        );
    }
}