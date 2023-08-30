import { FlatList, StyleSheet, Text, Image, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';
import ItemDetail from '../Screens/ItemDetail';

import InicialHome from '../Components/InicialHome';

const Stack = createNativeStackNavigator()
const InicialStack = ({
    navigation, route
}) => {


  
    return (
<> 
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
            name='InicialHome'
            component={InicialHome}
        />   
    </Stack.Navigator>   




</>

     )
    }



    
export default InicialStack

const styles = StyleSheet.create({
   
})