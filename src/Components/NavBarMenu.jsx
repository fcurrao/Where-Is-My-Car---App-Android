import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/User/userSlice";  
import { deleteSession } from "../SQLite";
import Search from "./Search"; 

import { Entypo } from '@expo/vector-icons';



const NavBarMenu = ( ) => {


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



return (<>
<View style={styles.navBarMenu}>
            
        <View style={styles.optionMenu}>  <Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="home" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; Inicio
             </View>
   
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="bell" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; Notificaciones
             </View>
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="calendar" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; FullYear 2024
             </View>
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             > 
                 <AntDesign name="checkcircleo" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; Promociones
             </View>
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="question" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; Contactanos - Ayuda
             </View>
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             > 
                 <Entypo name="leaf" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; About us
             </View>
             <View style={styles.optionMenu}> <Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="star" size={24} color="black" />
             </Pressable> &nbsp; &nbsp; Descubri
             </View>
            <View style={    styles.optionMenu}><Pressable
                 
                 onPress={onSignout}
             >
                 <SimpleLineIcons name="logout" size={24} color="black" />
             </Pressable> &nbsp; &nbsp;  Cerrar sesion 
                </View>

             
            </View>




</>)
}




export default NavBarMenu;

const styles = StyleSheet.create({
navBarMenu:{
    height: "100%",
    backgroundColor: "#EFFFEE",
    position: "fixed",
    top: "68px",
    // borderTop: "#00a53c 0.3em solid",
    // border: "1 solid black",
    webkitBoxShadow:"10px 10px 5px 0px white",
    mozBoxShadow:"10px 10px 5px 0px black", 
    boxShadow: "8px 8px 4px 0px #eeeaea",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    padding: "10px",
    // backgroundColor: colors.colorblanco,  
    width: "70%",
    display: "flex",
    flexDirection: "column"
},
optionMenu: { 
    fontFamily: 'Josefin',
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
} ,
optionMenuHover: {
    transform: "scale(1.7)",
},
containerHeader: {
    backgroundColor: colors.colorblanco,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
},
text: {
    fontSize: 25,
    // fontFamily: "Ubuntu",
},
pressablemenu: {
    position: "absolute",
    left: 30,
    top: "50%",
},
pressableback: {
    position: "absolute",
    right: 30,
    top: "50%",
},
signOut: {
    position: "absolute",
    left: 30,
    top: "50%",
},
});