import { StyleSheet, Pressable , FlatList, TextInput, Clipboard, Linking, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../Global/Colors"; 
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch } from "react-redux";
import { setUserFavorite } from "../features/User/userSlice";
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    FontAwesome5,
    MaterialIcons, 

} from "@expo/vector-icons";

const Notas = ({ navigation }) => {

    const { email, localId, favorite } = useSelector(state => state.userReducer.value)

    const [urlMaps, setUrlMaps] = useState("");
    const [textFavorita, setTextFavorita] = useState("");

    const onChangeText = (nuevoValor) => {
        setTextFavorita(nuevoValor);
    };


    const copyTextAdress = () => {
        Clipboard.setString(textFavorita);
        alert("Texto copiado al portapapeles");

    }

    const data = [
        {id:17000, title:'trabajo', description:"Balcarce 201, caba"},
        {id:17000, title:'casa', description:"Carlos Gardel 1248, caba"},
        {id:16000, title:'direccion tio', description:"Honanine 2031, san martin"},
        {id:21000, title:'otra dire', description:"miro 2222, caba"},
        {id:23000, title:'mecanico', description:"fijarme proximamente que cae del motor"},
        {id:26000, title:'chicos', description:"acoyte 1471, caba"},
        {id:32000, title:'aire y aceite', description:"cambio de correas, filtro de aire y otros"},
        {id:32003, title:'aire y aceite', description:"casd"},
    ]


    return (
        
        <View style={styles.container}>

            <Text style={styles.text}> Notas</Text>
            {/* <TextInput
                id='km'
                style={styles.input}
                onChangeText={onChangeText}
                value={textFavorita}
                placeholder="Kilometraje"

            />
            <TextInput
                id='tit'
                style={styles.input}
                onChangeText={onChangeText}
                value={textFavorita}
                placeholder="Titulo"

            />
             <TextInput
                id='descript'
                style={styles.input}
                onChangeText={onChangeText}
                value={textFavorita}
                placeholder="Descripcion"

            />
            <View style={styles.containerButton}>
            <Pressable style={styles.button}  onPress={copyTextAdress} title="Agregar" >  
           <AntDesign  name="check"  size={22} color={colors.colorgris}/>
            <Text style={styles.textb2}>AGREGAR</Text>
            </Pressable>

            <Pressable style={styles.button}  onPress={copyTextAdress} title="Borrar" >  
           <AntDesign  name="close"  size={22} color={colors.colorgris}/>
            <Text style={styles.textb2}>BORRAR</Text>
            </Pressable>
            </View>
            <Text style={styles.raya}></Text> */}
            <AddButton title="Agregar nuevo"></AddButton>
            
            <FlatList
                    data={data}
                    keyExtractor={data => data.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={false}
                    style={styles.flatlist}
                    renderItem={({ item }) =><>
                      <Text style={styles.descript} >{item.title} || {item.description}</Text>
                        <Text style={styles.raya}></Text></>
                    }
                  />
         

        </View>
    );
};

export default Notas;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },descript:{
       fontSize: 18, 
    }, containerButton:{
        display: 'flex',
        flexDirection: 'row',
        width: '50%'
    } ,   flatlist: {
        height: '80%',
      },raya: {
        borderWidth: 0.1,
        backgroundColor: "black",
        borderRadius: 1,
        marginBottom: 1,
        width: "100%"
    }, wrapper: {
        paddingHorizontal: 5,
        gap: 10,
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
    }, button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    }
});