import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BasicFlatList from './components/BasicFlatList';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/CartItem';
import ListProductWithCategory from './components/ListProductWithCategory';
import Categories from './screens/Categories';
import Setting from './screens/Setting';
import Login from './screens/Login'
import ProfileConsumer from './screens/ProfileConsumer';
import Register from './screens/Register';
import UpdatePassword from './screens/UpdatePassword'
import { View, Text } from 'react-native';
import CartIcon from './components/CartIcon';

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const ProductStack = createStackNavigator({
    BasicFlatList,
    ProductDetail
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
            <CartIcon />
            <Icon name="ios-cart"
                size={36}
                color={focused ? color.ACTIVE : color.INACTIVE}
            />
        </View>
    }
}
const CategoriesStack = createStackNavigator({
    Categories,
    ListProductWithCategory,
    ProductDetail
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
const SettingStack = createStackNavigator({
    Setting,
    Login,
    ProfileConsumer,
    Register,
    UpdatePassword
});
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