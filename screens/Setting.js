import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { login } from '../networking/Server'
import { CartContexts } from '../contexts/Cart'

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        });
    }
    render() {
        const Divider = (props) => {
            return <View {...props}>
                <View style={styles.line}></View>
                <Text style={styles.textOR}>OR</Text>
                <View style={styles.line}></View>
            </View>
        }
        return (
            <CartContexts.Consumer>
                {({ username, log_out, role }) => (
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.up}>
                                <Ionicons
                                    name="ios-speedometer"
                                    size={100}
                                    color={'rgb(221, 97, 97)'}>
                                </Ionicons>
                            </View>
                            {username.length ?
                                <View style={styles.down}>
                                    {role == 'admin' ?
                                        <View>
                                            <ScrollView>
                                                <TouchableOpacity>
                                                    <TouchableOpacity style={styles.loginButton} onPress={() => {
                                                        this.props.navigation.navigate('ProfileConsumer', {
                                                            user_name: this.props.navigation.getParam('user_name')
                                                        });
                                                    }}>
                                                        <Text style={styles.loginButtonTitle}>Tài khoản</Text>
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                    this.props.navigation.navigate('HistoryOrder', {
                                                        user_name: this.props.navigation.getParam('user_name')
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Lịch sử mua hàng</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                    this.props.navigation.navigate('UpdatePassword', {
                                                        user_name: this.props.navigation.getParam('user_name')
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Đổi mật khẩu</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                    log_out();
                                                    this.props.navigation.navigate('Setting', {
                                                        user_name: ""
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Đăng xuất</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                    log_out();
                                                    this.props.navigation.navigate('Setting', {
                                                        user_name: ""
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Quản lý đơn hàng</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.accountButtonUser} onPress={() => {
                                                    log_out();
                                                    this.props.navigation.navigate('Setting', {
                                                        user_name: ""
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Quản lý khách hàng</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                        :
                                        <View>
                                            <TouchableOpacity>
                                                <TouchableOpacity style={styles.loginButton} onPress={() => {
                                                    this.props.navigation.navigate('ProfileConsumer', {
                                                        user_name: this.props.navigation.getParam('user_name')
                                                    });
                                                }}>
                                                    <Text style={styles.loginButtonTitle}>Tài khoản</Text>
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                this.props.navigation.navigate('HistoryOrder', {
                                                    user_name: this.props.navigation.getParam('user_name')
                                                });
                                            }}>
                                                <Text style={styles.loginButtonTitle}>Lịch sử mua hàng</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                this.props.navigation.navigate('UpdatePassword', {
                                                    user_name: this.props.navigation.getParam('user_name')
                                                });
                                            }}>
                                                <Text style={styles.loginButtonTitle}>Đổi mật khẩu</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.accountButton} onPress={() => {
                                                log_out();
                                                this.props.navigation.navigate('Setting', {
                                                    user_name: ""
                                                });
                                            }}>
                                                <Text style={styles.loginButtonTitle}>Đăng xuất</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>

                                :
                                <View style={styles.down}>
                                    <TouchableOpacity>
                                        <TouchableOpacity style={styles.loginButton} onPress={() => {
                                            this.props.navigation.navigate('Login');
                                        }}>
                                            <Text style={styles.loginButtonTitle}>LOGIN</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    <Divider style={styles.divider}></Divider>
                                    <TouchableOpacity style={styles.registerButton} onPress={() => {
                                        this.props.navigation.navigate('Register');
                                    }}>
                                        <Text style={styles.loginButtonTitle}>REGISTER</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                )}
            </CartContexts.Consumer>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(234, 195, 176)'
    },
    up: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    down: {
        flex: 7,//70% of column
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        color: 'rgb(255,119,34)',
        textAlign: 'center',
        width: 400,
        fontSize: 23,
        marginBottom: 30
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 15,
        backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
    },
    textInput: {
        width: 280,
        height: 45
    },
    loginButton: {
        marginTop: 20,
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)'
    },
    registerButton: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998'
    },
    accountButton: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)',
        marginTop: 20
    },
    accountButtonUser: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)',
        marginTop: 20,
        marginBottom: 20
    },
    loginButtonTitle: {
        fontSize: 18,
        color: 'white'
    },
    facebookButton: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
    },
    line: {
        height: 1,
        flex: 2,
        backgroundColor: 'black'
    },
    textOR: {
        flex: 1,
        textAlign: 'center'
    },
    divider: {
        flexDirection: 'row',
        height: 40,
        width: 298,
        justifyContent: 'center',
        alignItems: 'center'
    }
})