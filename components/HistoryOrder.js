import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContexts } from '../contexts/Cart'
import CheckoutModal from '../components/CheckoutModal';
import { historyOrder } from '../networking/Server'

export default class HistoryOrder extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            itemOrder: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        historyOrder(this.props.navigation.getParam('user_name')).then((orderFromServer) => {
            this.setState({
                itemOrder: orderFromServer
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        const { itemOrder } = this.state;

        const styles = StyleSheet.create({
            centerElement: { justifyContent: 'center', alignItems: 'center' },
        });
        return (
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <ScrollView>
                    {itemOrder && itemOrder.map((item, i) => (
                        <View key={i} style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120 }}>
                            <View style={[styles.centerElement, { width: 10 }]}>

                            </View>
                            <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                <TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/ }} style={{ paddingRight: 10 }}>
                                    <Image source={{ uri: item.imageUrl }} style={[styles.centerElement, { height: 60, width: 60, backgroundColor: '#eeeeee' }]} />
                                </TouchableOpacity>
                                <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                    <Text numberOfLines={1} style={{ fontSize: 15 }}>{item.name}</Text>
                                    <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10, marginLeft: 5 }}>${item.price_product}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>Số lượng: {item.quantity}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={[styles.centerElement, { width: 150 }]}>
                                <Text style={{ color: 'red' }}>{item.trang_thai}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}
