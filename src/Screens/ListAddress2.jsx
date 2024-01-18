import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import AddressItem from '../Components/AddressItem'
import { useGetUserLocation2Query } from "../Services/shopServices";

const ListAddress2 = ({ navigation }) => {
    const { location2, localId } = useSelector((state) => state.userReducer.value);
    const {data:userLocationQuery, isError, isLoading} = useGetUserLocation2Query(localId)
  
 
    return location2?.latitude || userLocationQuery ? (
         <AddressItem 
        location={location2?.latitude ? location: userLocationQuery}
        navigation={navigation} /> 
    ) : (
        <View style = {styles.container}> 
             <Text style={styles.text}>No hay direccion guardada</Text>
            <AddButton
                title="Guardar direccion"
                onPress={() => navigation.navigate("Location Selector Moto")}
            />
        </View>
    );
  
};

export default ListAddress2;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18
    },
    text2: {
        paddingLeft: "45%",
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18
    }
});