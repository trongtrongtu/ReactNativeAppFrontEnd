import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const CartIcon = (props) => {
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
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {props.cartItems.length}
            </Text>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(CartIcon);