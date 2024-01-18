import { StyleSheet, Pressable, TextInput, Clipboard , Linking, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch } from "react-redux";
import { setUserFavorite } from "../features/User/userSlice";

const GpsMaps = ({ navigation }) => {

    const {email, localId, favorite} = useSelector(state => state.userReducer.value)
     
    const [urlMaps, setUrlMaps] = useState(""); 
    const [textFavorita, setTextFavorita] = useState(""); 

    const onChangeText = (nuevoValor) => {
        setTextFavorita(nuevoValor);
    };
 

    const copyTextAdress = () => {
        Clipboard.setString(textFavorita);
        alert("Texto copiado al portapapeles");
      
    }

    const redirectToMap = () => {
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(textFavorita)}`);
    }


    useEffect(() => {

    }, [urlMaps])

    return (
        <View style={styles.container}>
           
            <Text style={styles.text}> Ubicar direccion para ir</Text>
            <TextInput
                id='textFav'
                style={styles.input}
                onChangeText={onChangeText}
                value={textFavorita}
                placeholder="Direccion para Ir"

            />
            <AddButton
                onPress={redirectToMap}
                title="Ir con MAPS"
            />
            <AddButton
                onPress={copyTextAdress}
                title="Copiar txt"
            />
        </View>
    );
};

export default GpsMaps;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    }, raya: {
        borderWidth: 5,
        backgroundColor: "black",
        borderRadius: 2,
        marginBottom: 10,
        width: "100%"
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18
    }, card: {
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
    text2: {
        paddingLeft: "45%",
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18
    }, input: {
        height: 40,
        width: 220,
        margin: 4,
        borderWidth: 1,
        padding: 10,
    }, pressable: {
        margin: 2,
        padding: 5,
        borderWidth: 1,
        borderRadius: 8,
    }, buttons: {
        marginBottom: 20
    }
});