import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContexts } from '../contexts/Cart'
import CheckoutModal from '../components/CheckoutModal';
import { managementOrder } from '../networking/Server'

export default class ManagementOrder extends Component {
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
        managementOrder().then((orderFromServer) => {
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
                                <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 15, marginBottom: 10 }}>{item.username_order}</Text>
                                    <Text style={{ color: '#333333' }}>{item.sdt_order}</Text>
                                    <View>
                                        <Text style={{ paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.dia_chi_order}</Text>
                                    </View>
                                </View>
                                <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 15, marginBottom: 10 }}>{item.name_product}</Text>
                                    <Text style={{ color: '#333333' }}>${item.price_product}</Text>
                                    <View>
                                        <Text style={{ paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>Số lượng: {item.quantity}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.centerElement, { width: 50 }]}>
                                <Text style={{ color: 'red' }}>{item.trang_thai}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}
