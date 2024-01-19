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

const Services = ({ navigation }) => {

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
        {id:16000, title:'primer anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:17000, title:'sec anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:21000, title:'ter anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:23000, title:'services completo', description:"cambio de correas, filtro de aire y otros"},
        {id:26000, title:'potra', description:"cambio de correas, filtro de aire y otros"},
        {id:32000, title:'aire y aceite', description:"cambio de correas, filtro de aire y otros"},
        {id:43000, title:'completo', description:"cambio de correas, filtro de aire y otros"},
        {id:16001, title:'primer anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:17001, title:'sec anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:21001, title:'ter anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:23001, title:'services completo', description:"cambio de correas, filtro de aire y otros"},
        {id:26001, title:'potra', description:"cambio de correas, filtro de aire y otros"},
        {id:32001, title:'aire y aceite', description:"casd"},
        {id:43001, title:'completo', description:"casd correas, filtro de aire y otros"},
        {id:16002, title:'primer anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:17002, title:'sec anotacion', description:"xxxxxxxxx de correas, filtro de aire y otros"},
        {id:21002, title:'ter anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:23002, title:'services completo', description:"cambio de correas, filtro de aire y otros"},
        {id:26002, title:'potra', description:"cambio de correas, filtro de aire y otros"},
        {id:32002, title:'aire y aceite', description:"cambio de correas, filtro de aire y otros"},
        {id:43002, title:'completo', description:"cambio de correas, filtro de aire y otros"},
        {id:16003, title:'primer anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:17003, title:'sec anotacion', description:"cambio de correas, filtro de aire y otros"},
        {id:21003, title:'ter anotacion', description:"dddddddddddd de correas, filtro de aire y otros"},
        {id:23003, title:'services completo', description:"cambio de correas, filtro de aire y otros"},
        {id:26003, title:'potra', description:"cambio de correas, filtro de aire y otros"},
        {id:32003, title:'aire y aceite', description:"casd"},
        {id:43003, title:'completo', description:"cambio de correas, filtro de aire y otros"},
    ]


    return (
        
        <View style={styles.container}>

            <Text style={styles.text}> Services</Text>
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

                      <Text style={styles.descript} >{item.id} {item.title} || {item.description}</Text>
                        <Text style={styles.raya}></Text></>

                    }
                  />
         

        </View>
    );
};

export default Services;

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