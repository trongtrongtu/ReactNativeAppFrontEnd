import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import { myAccount } from '../networking/Server'

export default class Profile extends Component {
    static navigationOptions = {
        title: 'My Account'
    };
    constructor(props) {
        super(props);
        this.state = ({
            user: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        myAccount(this.props.username).then((userFromServer) => {
            this.setState({
                user: userFromServer[0]
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {

        return (
            <ScrollView>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.container}>
                    <View style={styles.down}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.user.username}
                                onChangeText={(username) => this.setState({ username: username })}
                            >
                            </TextInput>
                        </View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Opcion 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Opcion 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text>Opcion 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {

        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    textInput: {
        width: 280,
        height: 45
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 15,
        backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
    },
    down: {
        flex: 7,//70% of column
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(234, 195, 176)'
    },
});