import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton"; 
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices"; 
import { useDispatch } from "react-redux"; 

import { colors } from "../Global/Colors";
const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {email, localId, profileImage} = useSelector(state => state.userReducer.value) 
    const {data: image} = useGetProfileImageQuery(localId)

    console.log(image);
    const dispatch = useDispatch()

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    console.log(profileImage);

    return (
        <View style={styles.container}>
            <Text> HOLA: {email} </Text>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
            {/* <AddButton onPress={launchLocation} title="My address" /> */}
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.colorblanco,
        height: "100%",
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
