import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory'; 
import ItemDetail from '../Screens/ItemDetail';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
      <Stack.Navigator
      screenOptions={
        ({route, navigation}) => (
            {
                header: () => {
                    return <Header
                        route = {route}
                        navigation = {navigation}
                    />
                },

            }
        )
    }    
      >

        <Stack.Screen
            name='Home'
            component={Home}
        />

        <Stack.Screen
            name='ItemListCategory'
            component={ItemListCategory}
        />

        <Stack.Screen
            name='ItemDetail'
            component={ItemDetail}
        /> 
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})