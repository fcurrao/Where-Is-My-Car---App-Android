import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/User/userSlice";  
import { deleteSession } from "../SQLite";
import Search from "./Search";
import NavBarMenu from '../Components/NavBarMenu'

import { Entypo } from '@expo/vector-icons';

const Header = ({ route, navigation }) => {
    let title;
    if (route.name === "Home") title = "MyCar";
    else if (route.name === "ItemListCategory") title = route.params.category;
    else if (route.name === "ItemDetail") title = route.params.item.title;
    else title = route.name;

    const [ismenu, SetIsmenu] = useState(false)
    const dispatch = useDispatch();
    const { email, localId } = useSelector((state) => state.userReducer.value);

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState("")
  
     
    useEffect(()=> {
        //Lógica de manejo de category
        if(keyword) {  
          setKeyword(keyword)
        }
    
      }, [ keyword])
    

    
  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

  }  



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

    return (
        <>
         <Pressable
                    style={styles.pressableback}
                    onPress={()=>setKeyword(!keyword)}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
        {!keyword ? <>        <View style={styles.containerHeader}>
            <Pressable
                    style={styles.pressablemenu}
                    onPress={() => SetIsmenu(!ismenu)}
                >
            <Entypo name="menu" size={34}
             color={colors.color5}
            />
            </Pressable>
            <View style={styles.search} ><Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()} 
        />
        </View>
            {/* <Text style={styles.text}>{title}</Text> */}
            {navigation.canGoBack() ? (
                <Pressable
                    style={styles.pressableback}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            ) : null}
            {/* {email ? (
                <Pressable
                    style={styles.signOut}
                    onPress={onSignout}
                >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                </Pressable>
            ) : null} */}
        </View>
        {ismenu ? <>
        <NavBarMenu></NavBarMenu></>:<>
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            {/* ACA PONER BUSQUEDA CON "keyword" !!!!!!!!!!!!!!!!!! */}
            </>}
            </>: <></>}
</>

    );
};

export default Header;

const styles = StyleSheet.create({
    navBarMenu:{
        fontFamily: 'Josefin',
        position: "fixed",
        top: "10%",
        // borderTop: "#00a53c 0.3em solid",
        // border: "1 solid black",
        webkitBoxShadow:"10px 10px 5px 0px white",
        mozBoxShadow:"10px 10px 5px 0px black", 
        boxShadow: "8px 8px 4px 0px #eeeaea",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "10px",
        backgroundColor: colors.colorblanco, 
        height: "max-content",
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
        fontFamily: 'Josefin',
        transform: "scale(1.7)",
    },
    containerHeader: {
        fontFamily: 'Josefin',
        display:"flex",
        backgroundColor: colors.colorblanco, 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
        borderBottomColor: "#b7b7b7",
        borderBottomWidth: "3px"
        // borderBottom: "solid 3px #b7b7b7",
    },
    text: {
        fontFamily: 'Josefin',
        fontSize: 25,
        // fontFamily: "Ubuntu",
    },
    pressablemenu: {
        fontFamily: 'Josefin',
        position: "absolute",
        left: 20,
        top: "20%",
    },
    pressableback: {
        position: "absolute",
        right: 30,
        top: "50%",
    },
    signOut: {
        fontFamily: 'Josefin',
        position: "absolute",
        left: 30,
        top: "50%",
    },
    search:{
        fontFamily: 'Josefin',
        marginLeft: "15%",
    },
});
// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { colors } from '../Global/Colors'
// import { AntDesign } from "@expo/vector-icons";

// const Header =  ({ route, navigation })=> {
//   let title
//   if (route.name === 'Home') title = 'Home'
//   if (route.name == 'ItemListCategory') title = route.params.category
//   else if (route.name == 'ItemDetail') title = route.params.title
//   else title = route.name
//   return (
//       <View style={styles.containerHeader}>
//           <Text style={styles.text}>{title}</Text>
//           {route.name !== "Home" ? (
//               <Pressable
//                   style={styles.pressable}
//                   onPress={() => navigation.goBack()}
//               >
//                   <AntDesign name="back" size={24} color="black" />
//               </Pressable>
//           ) : null}
//       </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   containerHeader: {
//       backgroundColor: colors.peach,
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "center",
//       paddingVertical: 25,
//       position: "relative",
//   },
//   text: {
//       fontSize: 25,
//       fontFamily: "Josefin",
//   },
//   pressable: {
//       position: "absolute",
//       right: 30,
//       top: "50%",
//   },
// });