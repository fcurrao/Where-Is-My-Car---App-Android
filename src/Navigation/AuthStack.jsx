import React from "react";
import Header from '../Components/Header'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../Screens/Cart";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return  ;
                },
            })}   
        >
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;