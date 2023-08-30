import Header from '../Components/Header';
import Home from '../Screens/Home';
import ItemListCategory from '../Screens/ItemListCategory'; 
import ItemDetail from '../Screens/ItemDetail';
import Cart from '../Screens/Cart'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../Screens/OrderScreen';
import { colors } from "../Global/Colors";
const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    
    <Stack.Navigator
            initialRouteName="OrderScreen"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >

        <Stack.Screen 
            name='other2'
            component={OrderScreen}
        />
 
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({ })