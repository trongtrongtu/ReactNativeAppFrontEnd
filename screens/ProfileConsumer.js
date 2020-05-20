import React from 'react';
import { Text } from 'react-native';
import Profile from '../screens/Profile';
import { CartContexts } from '../contexts/Cart';

export default class ProfileConsumer extends React.Component {
    static navigationOptions = {
        title: 'My Account'
    };
    render() {
        return <CartContexts.Consumer>
            {({ username }) => (
                <Profile username={username} />
            )}
        </CartContexts.Consumer>
    }
}