import {
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack"; 
import ListAddress from "../Screens/ListAddress";
import ListAddress2 from "../Screens/ListAddress2";
import MyProfile from "../Screens/MyProfile";
import LocationSelector from "../Screens/LocationSelector";
import ImageSelector from "../Screens/ImageSelector";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../Global/Colors";
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    FontAwesome5,
    MaterialIcons, 

} from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import MyProfileStack from "./MyProfileStack";
import { getSession } from "../SQLite";
import InicialStack from './InicialStack'
import { setUser } from "../features/User/userSlice";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();

const Navigator = () => {
     const { email, localId } = useSelector((state) => state.userReducer.value); 
    // let email = 'f@f.com'

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                console.log('Getting session...');
                const session = await getSession()
                console.log('Sesion: ');
                console.log(session);
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log('Error getting session');
                console.log(error.message);
            }
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {email ? (
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarStyle: styles.tabBar,
                        }}
                    >
                         

                      <Tab.Screen
                            name="MyProfile"
                            component={MyProfileStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <Ionicons
                                                name="person-circle-outline"
                                                size={
                                                    focused ? 54 : 34
                                                }
                                                color={
                                                    focused ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />

<Tab.Screen
                            name="ListAddress"
                            component={ListAddress}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                           <AntDesign  
                                                name="car"
                                                size={
                                                    focused ? 54 : 34
                                                }
                                                color={
                                                    focused ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />

<Tab.Screen
                            name="ListAddress2"
                            component={ListAddress2}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                           <FontAwesome5  
                                                name="motorcycle"
                                                size={
                                                    focused ? 54 : 34
                                                }
                                                color={
                                                    focused ? colors.color5 : colors.colorgris
                                                }
                                            />
                                        </View>
                                    );
                                },
                            }}
                        />




                    </Tab.Navigator>
                ) : (
                    <AuthStack />
                )}
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    tabBar: {
        backgroundColor: colors.colorblanco,
        shadowColor: "black",
        height: 60,
    },
});
