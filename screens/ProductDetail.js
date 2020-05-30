import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
} from 'react-native';
import { productDetail } from '../networking/Server'
import { CartContexts } from '../contexts/Cart'

export default class ProductDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('productName')
        };
    };
    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            category_name: '',
            imageUrl: ' ',
            productDescription: ''
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        productDetail(this.props.navigation.getParam('productName')).then((productname) => {
            this.setState({
                name: productname[0].name,
                category_name: productname[0].category_name,
                imageUrl: productname[0].imageUrl,
                productDescription: productname[0].productDescription
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        let item = {
            name: this.state.name,
            category_name: this.state.category_name,
            imageUrl: this.state.imageUrl,
            productDescription: this.state.productDescription,
            checked: '1',
            quantity: '1'
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <Image style={styles.productImg} source={{ uri: this.state.imageUrl }} />
                        <Text style={styles.name}>{this.state.name}</Text>
                        <Text style={styles.price}>{this.state.productDescription} VND</Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
                    </View>
                    <View style={styles.addToCarContainer}>
                        <CartContexts.Consumer>
                            {({ addToCart }) => (
                                <TouchableOpacity style={styles.shareButton} onPress={() => addToCart(item)}>
                                    <Text style={styles.shareButtonText}>Add To Cart</Text>
                                </TouchableOpacity>
                            )}
                        </CartContexts.Consumer>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    productImg: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold',
        marginTop: 20
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold',
        marginTop: 20
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
        marginTop: 20
    },
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30,
        marginTop: 20
    }
});