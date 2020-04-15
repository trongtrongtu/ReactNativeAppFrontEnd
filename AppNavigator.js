import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BasicFlatList from './components/BasicFlatList';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    BasicFlatList
});
CategoryStack.navigationOptions = {
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
        return <Icon name="ios-cart"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const OrederStack = createStackNavigator({ Orders });
OrederStack.navigationOptions = {
    tabBarLabel: 'Oreders',
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
    CategoryStack,
    CartStack,
    OrederStack,
    SettingStack
})
export default AppNavigator;