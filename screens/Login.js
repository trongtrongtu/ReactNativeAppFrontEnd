import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { login } from '../networking/Server'
import { CartContexts } from '../contexts/Cart'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: "",
      password: ""
    });
  }
  refreshDataFromServer = () => {
    login(this.state.username, this.state.password).then((result) => {
      if (result == "ok") {
        this.props.navigation.navigate('Profile', {
          user_name: this.state.username
        });
      } else if (result == "empty") {
        Alert.alert('Thông báo', 'Cần nhập đầy đủ thông tin!');
      } else {
        Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu bị sai!');
      }
    }).catch((error) => {
      console.error(error);
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name="ios-speedometer"
              size={100}
              color={'rgb(221, 97, 97)'}>
            </Ionicons>
            <Text style={styles.title}>
              Đăng Nhập
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
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password: password })}
              >
              </TextInput>
            </View>
            <CartContexts.Consumer>
              {({ userName }) => (
                <TouchableOpacity>
                  <TouchableOpacity style={styles.loginButton} onPress={() => {
                    this.refreshDataFromServer();
                    login(this.state.username, this.state.password).then((result) => {
                      if (result == "ok") {
                        userName(this.state.username);
                      }});
                  }}>
                    <Text style={styles.loginButtonTitle}>LOGIN</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            </CartContexts.Consumer>
            <Divider style={styles.divider}></Divider>
            <TouchableOpacity style={styles.registerButton} onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
              <Text style={styles.loginButtonTitle}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

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