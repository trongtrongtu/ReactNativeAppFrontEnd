import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const image1 = require('../images/orange.jpg');
const image2 = require('../images/tomato.jpg');
const image3 = require('../images/salmon.jpg');
const image4 = require('../images/greens.jpg');
const image5 = require('../images/rye-bread.jpg');

const data = [
    {
        id: 1,
        image: image1,
        name: 'Orange',
        price: 10,
        amountTaken: 3
    }, {
        id: 2,
        image: image2,
        name: 'Tomato',
        price: 5,
        amountTaken: 4
    }, {
        id: 3,
        image: image3,
        name: 'Salmon fillet',
        price: 16,
        amountTaken: 2
    }, {
        id: 4,
        image: image4,
        name: 'Greens',
        price: 3,
        amountTaken: 3
    }, {
        id: 5,
        image: image5,
        name: 'Rye Bread',
        price: 20,
        amountTaken: 1
    },
];
function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }

class Cart extends Component {
    _renderItem({ item, index }) {
        const {
            containerStyle,
            lastItemStyle,
            imageStyle,
            textStyle,
            counterStyle,
            priceStyle
        } = styles;

        return (
            <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
                <Image source={item.image} style={imageStyle} />

                <View style={textStyle}>
                    <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
                    <View style={priceStyle}>
                        <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
                    </View>
                </View>

                <View style={counterStyle}>
                    <Icon.Button
                        name="ios-remove"
                        size={25}
                        color='#fff'
                        backgroundColor='#fff'
                        style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
                        iconStyle={{ marginRight: 0 }}
                    />

                    <Text>{item.amountTaken}</Text>

                    <Icon.Button
                        name="ios-add"
                        size={25}
                        color='#fff'
                        backgroundColor='#fff'
                        style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
                        iconStyle={{ marginRight: 0 }}
                    />

                </View>
            </View>
        );
    }


    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
                <View style={styles.containerStyleFooter}>
                    <View style={styles.ItemsStyleFooter}>
                        <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
                        <Text>8 goods</Text>
                    </View>

                    <View style={styles.totalStyleFooter}>
                        <Text>Total - </Text>
                        <Text>$300</Text>
                    </View>
                </View>
                <View style={styles.containerStyleOrder}>
                    <View style={styles.buttonContainerStyleOrder}>
                        <View style={styles.closeButtonStyle}>
                            <Text style={{ color: '#fff' }}>Close</Text>
                        </View>

                        <View style={styles.checkoutButtonStyle}>
                            <Text style={{ color: '#fff' }}>Go to checkout</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 40,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    containerStyleFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    ItemsStyleFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    totalStyleFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    containerStyleOrder: {
        paddingRight: 15,
        paddingLeft: 15,
    },
    buttonContainerStyleOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    closeButtonStyle: {
        backgroundColor: '#7f8c8d',
        padding: 10,
        borderRadius: 3,
    },
    checkoutButtonStyle: {
        backgroundColor: '#f39c12',
        padding: 10,
        borderRadius: 3,
    }
};

export default Cart;
