import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { listUSers } from '../networking/Server'

function Item({ item }) {
    return (
        <View style={styles.listItem}>
            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Tên: {item.username}</Text>
                <Text>Đ/c: {item.dia_chi}</Text>
            </View>
            <TouchableOpacity style={{ height: 50, width: 100, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "green" }}>{item.sdt}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default class ListUSers extends React.Component {
    static navigationOptions = {
        title: 'Quản lý khách hàng'
    };
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        listUSers().then((usersFromServer) => {
            this.setState({
                users: usersFromServer
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.users}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.username}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }
});