import React from 'react';
import { Text } from 'react-native';

export default class ProductDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('ProductDetail')
        };
    };

      render() {
          return <Text>Product Detail</Text>
      }
}