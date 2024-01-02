import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }
    const viewLocation = () => {
        navigation.navigate('Location View')
        
        }
    

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {location.address}
                </Text>
            </View>
            <View style={styles.card2} >
            <Pressable style={styles.pressable} onPress={viewLocation}>
                <Entypo name="eye" size={32} color="black">
                    <Text style={styles.text2}> Ver</Text>
                </Entypo>
            </Pressable>
            <Pressable style={styles.pressable} onPress={onChangeLocation}>
                <Entypo name="location" size={32} color="black">
                    <Text style={styles.text2}> Cambiar</Text>
                </Entypo>
            </Pressable>
            </View>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: colors.colorblanco,
        padding: 4,
        margin: 4,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    card2:{
        margin:20,
        flexDirection: "column",    
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "95%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom:5,
    },
    text: {
        paddingTop: 20,
        paddingBottom: 10,
        fontFamily: "Josefin",
        fontSize: 20,
        color: "black",
    },
    text2: {
        padding:20,
        margin:20,
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.pink,
    },
    pressable: {
        margin: 4,
        padding:8,
        borderWidth: 2,
        borderRadius: 10,
    },  
});