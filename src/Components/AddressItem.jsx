import { Pressable, StyleSheet, Text, View, Linking, Clipboard } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";
import { usePostFavoriteAdressMutation} from "../Services/shopServices";
import { useGetFavoriteAdressQuery} from "../Services/shopServices";

const AddressItem = ({ location, navigation, localId }) => {



    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }
    const viewLocation = () => {
        navigation.navigate('Location View')

    }
    const copyTextAdress = () => {
        Clipboard.setString(location.address);
        alert("Texto copiado al portapapeles");
    }

    const redirectToMap = () =>{
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`);
    }


    return (
        <View style={styles.card} onPress={() => { }}>
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
                <Pressable style={styles.pressable} onPress={copyTextAdress}>
                    <Entypo name="copy" size={32} color="black">
                        <Text style={styles.text2}> Copiar txt</Text>
                    </Entypo>
                </Pressable>
                <Pressable style={styles.pressable} onPress={redirectToMap}>
                    <Entypo name="map" size={32} color="black">
                        <Text style={styles.text2}> Ir en MAPS</Text>
                    </Entypo>
                </Pressable>
            </View>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: "auto",
        backgroundColor: colors.colorblanco,
        padding: 2,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    card2: {
        margin: 14,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "95%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 5,
    },
    text: {
        paddingTop: 20,
        paddingBottom: 10,
        fontFamily: "Josefin",
        fontSize: 20,
        color: "black",
    },
    text2: {
        padding: 20,
        margin: 20,
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.pink,
    },
    pressable: {
        margin: 2,
        padding: 5,
        borderWidth: 1,
        borderRadius: 8,
    },
});