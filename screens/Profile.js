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
import DatePicker from 'react-native-datepicker';
import RadioForm from 'react-native-simple-radio-button';
import { myAccount } from '../networking/Server'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: "",
            gioi_tinh: "",
            ngay_sinh: "",
            email: "",
            sdt: "",
            dia_chi: ""
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        myAccount(this.props.username).then((userFromServer) => {
            this.setState({
                username: userFromServer[0].username,
                gioi_tinh: userFromServer[0].gioi_tinh,
                ngay_sinh: userFromServer[0].ngay_sinh,
                email: userFromServer[0].email,
                sdt: userFromServer[0].sdt,
                dia_chi: userFromServer[0].dia_chi
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        var radio_props = [
            { label: 'Nam', value: 'Nam' },
            { label: 'Nữ', value: 'Nữ' },
        ];
        return (
            <ScrollView>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.container}>
                    <View style={styles.down}>
                        <View style={styles.textInputContainerTop}>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username: username })}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email: email })}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                keyboardType='number-pad'
                                value={this.state.sdt}
                                onChangeText={(sdt) => this.setState({ sdt: sdt })}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.dia_chi}
                                onChangeText={(dia_chi) => this.setState({ dia_chi: dia_chi })}
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
                                initial={this.state.gioi_tinh.length}
                                buttonSize={15}
                                onPress={(value) => { this.setState({ gioi_tinh: value }) }}
                            />
                        </View>
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
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    textInputRadio: {
        marginBottom: 20,
    }
});