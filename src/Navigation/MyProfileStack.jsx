import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import MyProfile from "../Screens/MyProfile";
import ImageSelector from "../Screens/ImageSelector";
import ListAddress from "../Screens/ListAddress";
import FavoriteAddress from "../Screens/FavoriteAddress";
import LocationView from  "../Screens/LocationView";
import LocationSelector from "../Screens/LocationSelector"; 
import GpsMaps from "../Screens/Gps Maps";
import Services from "../Screens/Services"
import Notas from "../Screens/Notas"

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Profile"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return  ;
                },
            })}
        >
            <Stack.Screen name="My Profile" component={MyProfile} />
            <Stack.Screen name="Image Selector" component={ImageSelector} />
            <Stack.Screen name="List Address" component={ListAddress}/>
            <Stack.Screen name="Favorite Address" component={FavoriteAddress}/>
            <Stack.Screen name="Gps Maps" component={GpsMaps}/>
            <Stack.Screen name="Notas" component={Notas}/>
            <Stack.Screen name="Services" component={Services}/>
            <Stack.Screen name="Location Selector" component={LocationSelector} />
            <Stack.Screen name="Location View" component={LocationView} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;