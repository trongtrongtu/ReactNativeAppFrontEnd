import React from 'react';
import { Text } from 'react-native';
import { productDetail } from '../networking/Server'

export default class ProductDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('productName')
        };
    };
    constructor(props) {
        super(props);
        this.state = ({
            productFromServer: {}
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        productDetail(this.props.navigation.getParam('productName')).then((productFromServer) => {
            this.setState({
                product: productFromServer
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        return <Text>Product Detail</Text>
    }
}