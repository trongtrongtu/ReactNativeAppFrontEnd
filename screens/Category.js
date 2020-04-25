import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          "id": 1,
          "images": [
            {
              "url": "https://congngheads.com/media/images/anh-dep/hinh-nen-may-tinh-dep-de-thuong-1559658746/anh-dep-phong-canh-thien-nhien-tuoi-moi-lam-hinh-nen-19-06-2019-1.jpg"
            }
          ],
          "name": "Asus",
          "price": "500000",
          "category": 1
        },
        {
          "id": 2,
          "images": [
            {
              "url": "https://congngheads.com/media/images/anh-dep/hinh-nen-may-tinh-dep-de-thuong-1559658746/anh-dep-phong-canh-thien-nhien-tuoi-moi-lam-hinh-nen-19-06-2019-6.jpg"
            }
          ],
          "name": "Macbook",
          "price": "1000000",
          "category": 1
        },
        {
          "id": 3,
          "images": [
            {
              "url": "https://congngheads.com/media/images/anh-dep/hinh-nen-may-tinh-dep-de-thuong-1559658746/anh-dep-phong-canh-thien-nhien-tuoi-moi-lam-hinh-nen-19-06-2019-4.jpg"
            }
          ],
          "name": "Hp",
          "price": "1500000",
          "category": 1
        },
        {
          "id": 4,
          "images": [
            {
              "url": "https://congngheads.com/media/images/anh-dep/hinh-nen-may-tinh-dep-de-thuong-1559658746/anh-dep-phong-canh-thien-nhien-tuoi-moi-lam-hinh-nen-19-06-2019-2.jpg"
            }
          ],
          "name": "Dell",
          "price": "1000000",
          "category": 1
        }
      ]
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.wrapper}>
            <ProductListItem product={item} />
          </View>
        }
        keyExtractor={(item) => `${item.id}`} />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16
  },
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8
  }
});
