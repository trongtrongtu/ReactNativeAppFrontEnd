import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, RefreshControl, TouchableOpacity } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

import AddModal from './AddModal';
import EditModal from './EditModal';

import { getProductsFromServer } from '../networking/Server';
import { DeleteAProduct } from '../networking/Server';
import { CartContexts } from '../contexts/Cart'

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            item: []
        };
    }
    refreshFlatListItem = (changedItem) => {
        console.log(`changedItem = ${JSON.stringify(changedItem)}`);
        this.setState({ item: changedItem });
        console.log(`item = ${JSON.stringify(this.state.item)}`);
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        let selectedItem = this.state.item.name ? this.state.item : this.props.item;
                        this.props.parentFlatList.refs.editModal.showEditModal(selectedItem, this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        // flatListData.splice(this.props.index, 1);
                                        // this.props.parentFlatList.refreshFlatList(deletingRow);
                                        DeleteAProduct(this.state.item.name);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'mediumseagreen'
                }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, height: 100, margin: 5 }}
                        >
                        </Image>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 100
                    }}>
                        <Text style={styles.flatListItem}>{this.state.item.name ? this.state.item.name : this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.state.item.productDescription ? this.state.item.productDescription : this.props.item.productDescription}</Text>
                    </View>
                    <View>
                        <CartContexts.Consumer>
                            {({ addToCart }) => (
                                <TouchableOpacity onPress={() => addToCart(this.props.item)}>
                                    <Text style={{
                                        textTransform: 'uppercase',
                                        fontSize: 16,
                                        color: 'white',
                                        marginTop: 85,
                                        marginRight: 5
                                    }}>MUA +</Text>
                                </TouchableOpacity>
                            )}
                        </CartContexts.Consumer>
                    </View>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white'
                }}>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

class BasicFlatList extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            refreshing: false,
            productsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({ refreshing: true });
        getProductsFromServer().then((products) => {
            this.setState({ productsFromServer: products });
            this.setState({ refreshing: false });
        }).catch((error) => {
            this.setState({ productsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }
    onRefresh = () => {
        this.refreshDataFromServer();
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View>
                <CartContexts.Consumer>
                    {({ role }) => (
                        <View>
                            {role == 'admin' ?
                                <View style={{
                                    backgroundColor: 'tomato',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    height: 64
                                }}>
                                    <TouchableHighlight
                                        style={{ marginRight: 10 }}
                                        underlayColor='tomato'
                                        onPress={this._onPressAdd}
                                    >
                                        <Image
                                            style={{ width: 35, height: 35 }}
                                            source={require('../icons/icons-add.png')}
                                        />
                                    </TouchableHighlight>
                                </View>
                                :
                                <View></View>
                            }
                        </View>
                    )}
                </CartContexts.Consumer>
                <FlatList style={{ marginBottom: -2 }}
                    ref={"flatList"}
                    data={this.state.productsFromServer}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}
                                onPress={() => this.props.navigation.navigate('ProductDetail', {
                                    productName: item.name
                                })
                                }
                            />
                        );
                    }}
                    keyExtractor={(item, index) => item.name}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} >

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View >
        );
    }
}

export default BasicFlatList;