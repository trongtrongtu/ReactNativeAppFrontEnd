import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import { getCategoriesFromServer } from '../networking/Server';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    this.setState({ refreshing: true });
    getCategoriesFromServer().then((categories) => {
      this.setState({ categories: categories });
      this.setState({ refreshing: false });
    }).catch((error) => {
      this.setState({ categories: [] });
      this.setState({ refreshing: false });
    });
  }
  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) =>
            <CategoryListItem
              category={item}
              onPress={() => navigation.navigate('ListProductWithCategory', {
                categoryName: item.name
              })} />
          }
          keyExtractor={item => `${item.name}`}
          style={styles.title}
          contentContainerStyle={{}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16
  }
});
