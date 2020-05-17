import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContexts } from '../contexts/Cart'

export default function Cart(props) {

    const { cartItems, selectAll} = props;

    const styles = StyleSheet.create({
        centerElement: { justifyContent: 'center', alignItems: 'center' },
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                    <ScrollView>
                        {cartItems && cartItems.map((item, i) => (
                            <View key={i} style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120 }}>
                                <View style={[styles.centerElement, { width: 60 }]}>
                                    <CartContexts.Consumer>
                                        {({ selectHandler }) => (
                                            <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => selectHandler(i, item.checked)}>
                                                <Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
                                            </TouchableOpacity>
                                        )}
                                    </CartContexts.Consumer>
                                </View>
                                <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                    <TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/ }} style={{ paddingRight: 10 }}>
                                        <Image source={{ uri: item.imageUrl }} style={[styles.centerElement, { height: 60, width: 60, backgroundColor: '#eeeeee' }]} />
                                    </TouchableOpacity>
                                    <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                        <Text numberOfLines={1} style={{ fontSize: 15 }}>{item.name}</Text>
                                        <Text numberOfLines={1} style={{ color: '#8f8f8f' }}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                                        <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>${item.productDescription}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <CartContexts.Consumer>
                                                {({ quantityHandler }) => (
                                                    <TouchableOpacity onPress={() => quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                                        <MaterialIcons name="remove" size={22} color="#cccccc" />
                                                    </TouchableOpacity>
                                                )}
                                            </CartContexts.Consumer>
                                            <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.quantity}</Text>
                                            <CartContexts.Consumer>
                                                {({ quantityHandler }) => (
                                                    <TouchableOpacity onPress={() => quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                                        <MaterialIcons name="add" size={22} color="#cccccc" />
                                                    </TouchableOpacity>
                                                )}
                                            </CartContexts.Consumer>
                                        </View>
                                    </View>

                                </View>
                                <View style={[styles.centerElement, { width: 60 }]}>
                                    <CartContexts.Consumer>
                                        {({ deleteHandler }) => (
                                            <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => deleteHandler(i)}>
                                                <Ionicons name="md-trash" size={25} color="#ee4d2d" />
                                            </TouchableOpacity>
                                        )}
                                    </CartContexts.Consumer>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                <View style={{ backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.centerElement, { width: 60 }]}>
                            <CartContexts.Consumer>
                                {({ selectHandlerAll }) => (
                                    <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => selectHandlerAll(selectAll)}>
                                        <Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
                                    </TouchableOpacity>
                                )}
                            </CartContexts.Consumer>
                        </View>
                        <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text>Select All</Text>
                            <View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
                                <Text style={{ color: '#8f8f8f' }}>SubTotal: </Text>
                                <Text>${cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.quantity * item.productDescription : 0), 0)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.centerElement, { backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5 }]} onPress={() => console.log('test')}>
                            <Text style={{ color: '#ffffff' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}
