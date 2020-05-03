import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CartContexts } from '../contexts/Cart';

const CartIcon = () => {
    return (
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
            <CartContexts.Consumer>
                {({ cartItems }) => (
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {cartItems.length}
                        </Text>
                    </TouchableOpacity>
                )}
            </CartContexts.Consumer>
        </View>
    );
}

export default CartIcon;