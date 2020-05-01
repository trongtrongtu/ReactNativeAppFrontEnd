import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BasicFlatList from './components/BasicFlatList';
import Cart from './screens/Cart2';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Settings from './screens/Profile2';
import { View, Text } from 'react-native';

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const ProductStack = createStackNavigator({
    BasicFlatList
});
ProductStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-planet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const CartStack = createStackNavigator({
    Cart
});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused }) => {
        return <View>
            <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            0
          </Text>
        </View>
            <Icon name="ios-cart"
                size={36}
                color={focused ? color.ACTIVE : color.INACTIVE}
            />
        </View>
    }
}
const CategoriesStack = createStackNavigator({
    Categories,
    Category
});
CategoriesStack.navigationOptions = {
    tabBarLabel: 'Categories',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-wallet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const SettingStack = createStackNavigator({ Settings })
SettingStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => {
        return <Icon name="ios-cog"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const AppNavigator = createBottomTabNavigator({
    ProductStack,
    CategoriesStack,
    CartStack,
    SettingStack
})
export default AppNavigator;