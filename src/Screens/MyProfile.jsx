import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import AddButton from "../Components/AddButton"; 
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices"; 
import { useDispatch } from "react-redux"; 
import { signOut } from "../features/User/userSlice";  
import { deleteSession } from "../SQLite"; 
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    FontAwesome5,
    MaterialIcons, 

} from "@expo/vector-icons";
import { colors } from "../Global/Colors";
const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {email, localId, profileImage} = useSelector(state => state.userReducer.value)
    const {data: image} = useGetProfileImageQuery(localId) 


    useEffect(() => {
        console.log("aca")
        console.log(email)
        console.log("esto ID:",localId)
        console.log("imagen", image);
        console.log("aca")
        console.log("cameraImage", cameraImage)
        console.log("profileImage",profileImage)
        
    }, []);

    
    const dispatch = useDispatch()

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };
   
    
const onSignout = async () => {
    try{
        
        console.log("deleting session...")
        const response = await deleteSession(localId)
        dispatch(signOut())
        console.log("session deleted:")
        console.log(response)
    }
    catch(error){
        console.log("Error mientras sign out")
        console.log(error.message)
    }
}

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }
    const favoritelocation = async () => {
        navigation.navigate('Favorite Address')
    }
    const GpsMaps = async () => {
        navigation.navigate('Gps Maps')
    }




    console.log(profileImage);

    return (
       
        <View style={styles.container}>
            <Text style={styles.perfil}> Usuario {email} </Text>
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
            <View  style={styles.containerButton}>
            <Pressable style={styles.button} onPress={launchCamera} title="Agregar/Cambiar foto" > 
            <Entypo name="image" size={22} color="black"></Entypo>
            <Text style={styles.textb}>Agregar/cambiar foto</Text>
            </Pressable>
           <Pressable style={styles.button}  onPress={favoritelocation} title="Mi direccion Favorita" >  
           <AntDesign name="star" size={22} color="black"></AntDesign>
            <Text style={styles.textb}>Direccion Favorita</Text>
            </Pressable>
           <Pressable style={styles.button}  onPress={GpsMaps} title="Usar MAPS" >  
           <AntDesign  name="up"  size={22} color={colors.colorgris}/>
            <Text style={styles.textb}>Usar Maps</Text>
            </Pressable>
           <Pressable style={styles.button2}  onPress={onSignout} title="Cerrar Sesión" >  
           <AntDesign  name="close"  size={22} color={colors.colorgris}/>
            <Text style={styles.textb2}>Cerrar Sesión</Text>
            </Pressable>
            </View> 
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "row", 
        width: 250,
        borderWidth: 1,
        backgroundColor: colors.pink,
        borderColor: "black",
        textDecorationColor: "black",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
    }, button2: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row", 
        width: 250,
        borderWidth: 1,
        color: "white",
        backgroundColor: "black",
        borderColor: "black",
        textDecorationColor: "black",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
    }, perfil:{
        fontSize: 22,
        color: "#74d171",
    },containerButton:{
        height: "100%",
        padding: 1,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 1,
        marginTop: 5,
    },textb: {
        marginLeft: 20,
        fontSize: 18,
        padding: 0,
        margin: 0,
    }, textb2: {
        color: "white",
        marginLeft: 20,
        fontSize: 18,
        padding: 0,
        margin: 0,
    }, 
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
