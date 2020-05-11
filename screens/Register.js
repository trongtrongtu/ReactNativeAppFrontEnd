import React, { Component } from 'react';
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
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { login } from '../networking/Server';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: "",
            password: "",
            gioi_tinh: "",
            ngay_sinh: "2020-01-01"

        });
    }
    refreshDataFromServer = () => {
        login(this.state.username, this.state.password).then((result) => {
            if (result == "ok") {
                Alert.alert('Thông báo', 'Đăng nhập thành công!');
            } else {
                Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu bị sai!');
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        let radio_props = [
            { label: 'Nam', value: 0 },
            { label: 'Nữ', value: 1 },
        ];
        return (
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.up}>
                            <Ionicons
                                name="ios-speedometer"
                                size={100}
                                color={'rgb(221, 97, 97)'}>
                            </Ionicons>
                            <Text style={styles.title}>
                                Đăng Ký
          </Text>
                        </View>
                        <View style={styles.down}>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your username"
                                    onChangeText={(username) => this.setState({ username: username })}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your password"
                                    keyboardType='visible-password'
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password: password })}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    keyboardType='email-address'
                                    placeholder="Enter your email"
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    keyboardType='number-pad'
                                    placeholder="Enter your sdt"
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your địa chỉ"
                                >
                                </TextInput>
                            </View>
                            <View style={styles.textInputRadio}>
                                <DatePicker
                                    style={{ width: 200 }}
                                    date={this.state.ngay_sinh}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="1900-01-01"
                                    maxDate="2020-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                    }}
                                    onDateChange={(date) => { this.setState({ ngay_sinh: date }) }}
                                />
                            </View>
                            <View style={styles.textInputRadio}>
                                <RadioForm
                                    radio_props={radio_props}
                                    buttonSize={15}
                                    onPress={(label) => { this.setState({ gioi_tinh: label }) }}
                                />
                            </View>
                            <TouchableOpacity style={styles.registerButton}>
                                <Text style={styles.loginButtonTitle} onPress={() => {
                                    this.refreshDataFromServer();
                                }}>REGISTER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
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
        marginTop: 15
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
        marginBottom: 15
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
    },
    textInput: {
        width: 280,
        height: 45
    },
    loginButton: {
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
        backgroundColor: '#3b5998',
        marginBottom: 100,
        marginTop: 30
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
    },
    textInputRadio: {
        marginBottom: 20,
    }
})