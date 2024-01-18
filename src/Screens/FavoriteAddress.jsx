import { StyleSheet, Pressable, TextInput, Clipboard , Linking, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons"; 
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useGetUserLocationQuery } from "../Services/shopServices";
import { useGetFavoriteAdressQuery } from "../Services/shopServices";
import { usePostFavoriteAdressMutation } from "../Services/shopServices";
import { useDispatch } from "react-redux";
import { setUserFavorite } from "../features/User/userSlice";

const FavoriteAdress = ({ navigation }) => {

    const {email, localId} = useSelector(state => state.userReducer.value)
    
    
    // const { data:   } = useGetUserLocationQuery(localId)
    const { data:  fav } = useGetFavoriteAdressQuery(localId)
    // const { data:  dataLocation } = usePostFavoriteAdressMutation(favorite, localId)
    
    const [triggerPostAddress, result] = usePostFavoriteAdressMutation();
    const dispatch = useDispatch();
    const [textFavorita, setTextFavorita] = useState("");  
    const [cambio, setCambio] = useState(false);  

    const onChangeText = (nuevoValor) => {
        setTextFavorita(nuevoValor);
    };

    const onConfirm = () => {
        setCambio(true)
        // console.log("fav", fav)
        // console.log("fav", textFavorita)
        // favorite = textFavorita
        dispatch(setUserFavorite(textFavorita))  
        triggerPostAddress({ favorite: textFavorita, localId })

        // triggerPostAddress({ favorite: textFavorita, localId }) 
       setTimeout(() => {
           alert("direccion guardada, REINICIE LA APLICACION PARA VER EL CAMBIO");
        
           navigation.goBack()
       }, 1000);
    }


    const copyTextAdress = () => {
        Clipboard.setString(fav);
        alert("Texto copiado al portapapeles");
        setTextFavorita("")
    }

    const redirectToMap = () => {
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fav)}`);
    }


    useEffect(() => {
// console.log("fav", fav.favorite)
// console.log("fav", textFavorita)
    }, [textFavorita])

    return (
        <View>
            <View style={styles.card} >
                <Text style={styles.text}>
                    Direccion favorita:
                </Text>
                <Text style={styles.text}> 
                    { 
                    (cambio === true) ?   `${textFavorita}`   :    (fav == undefined || fav == null) ?  `${textFavorita}`  : (fav !== undefined || fav !== null) ?   `${fav.favorite}`   :  "" }
                </Text>

                <View  style={styles.buttons}>
                    <Pressable style={styles.pressable} onPress={redirectToMap}>
                        <Entypo name="map" size={32} color="black">
                            <Text style={styles.text2}> Ir en MAPS</Text>
                        </Entypo>
                    </Pressable>

                    <Pressable style={styles.pressable} onPress={copyTextAdress}>
                        <Entypo name="copy" size={32} color="black">
                            <Text style={styles.text2}> Copiar txt</Text>
                        </Entypo>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.raya}></Text>
            <Text style={styles.text}> Cambiar direccion ?</Text>
            <TextInput
                id='textFav'
                style={styles.input}
                onChangeText={onChangeText}
                value={textFavorita}
                placeholder="Direccion Favorita"

            />
            <AddButton
                onPress={onConfirm}
                title="Confirmar dirección nueva"
            />
        </View>
    );
};

export default FavoriteAdress;

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