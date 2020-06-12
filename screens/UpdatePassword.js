import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import { update_password } from '../networking/Server';

export default class UpdatePassword extends Component {
    static navigationOptions = {
        title: 'Update Password'
    };
    constructor(props) {
        super(props);
        this.state = ({
            old_password: "",
            new_password: "",
            confirm_password: ""
        });
    }
    refreshData = () => {
        update_password(this.props.navigation.getParam('user_name'), this.state.old_password, this.state.new_password, this.state.confirm_password).then((result) => {
            if (result == "ok") {
                Alert.alert('Thông báo', 'Cập nhập mật khẩu thành công!');
            } else if (result == "empty") {
                Alert.alert('Thông báo', 'Cần nhập đầy đủ thông tin!');
            } else if (result == "confirm_failed") {
                Alert.alert('Thông báo', 'Mật khẩu mới không khớp!');
            } else if (result == "failed") {
                Alert.alert('Thông báo', 'Mật khẩu sai!');
            }
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
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginTop: 114, marginRight: 10 }}><Text>Mật khẩu cũ:</Text></View>
                            <View style={styles.textInputContainerTop}>
                                <TextInput
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    value={this.state.old_password}
                                    onChangeText={(old_password) => this.setState({ old_password: old_password })}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginTop: 14, marginRight: 0 }}><Text>Mật khẩu mới: </Text></View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    value={this.state.new_password}
                                    onChangeText={(new_password) => this.setState({ new_password: new_password })}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginTop: 5 }}>
                                <Text>     Nhập lại</Text>
                                <Text>mật khẩu mới: </Text>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    value={this.state.confirm_password}
                                    onChangeText={(confirm_password) => this.setState({ confirm_password: confirm_password })}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={() => {
                            this.refreshData();
                        }}>
                            <Text style={styles.saveButtonTitle}>SAVE</Text>
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
        width: 180,
        height: 45,
        justifyContent: 'center',
    },
    textInputContainerTop: {
        marginTop: 100,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 15,
        backgroundColor: 'rgb(221, 97, 97)'
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 15,
        backgroundColor: 'rgb(221, 97, 97)'
    },
    down: {
        flex: 7,//70% of column
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    textInputRadio: {
        marginBottom: 20,
    },
    saveButton: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)'
    },
    saveButtonTitle: {
        fontSize: 18,
        color: 'white'
    }
});