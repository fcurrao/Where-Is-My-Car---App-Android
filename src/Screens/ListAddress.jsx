import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AddButton from "../Components/AddButton";
import AddressItem from '../Components/AddressItem'
import { useGetUserLocationQuery } from "../Services/shopServices";
import Services from "../Screens/Services"
import Notas from "../Screens/Notas"


const ListAddress = ({ navigation }) => {
    const { location, localId } = useSelector((state) => state.userReducer.value);
    const { data: userLocationQuery, isError, isLoading } = useGetUserLocationQuery(localId)


    return (
        <View style={styles.container}>
          {location?.latitude || userLocationQuery ? (
            <AddressItem
              localId={localId}
              location={location?.latitude ? location : userLocationQuery}
              navigation={navigation}
            />
          ) : (
            <View style={styles.container}>
              <Text style={styles.text}>No hay dirección guardada</Text>
              <AddButton
                title="Guardar dirección"
                onPress={() => navigation.navigate("Location Selector")}
              />
            </View>
          )}
           {/* <AddButton
            title="Ubicacion"
            onPress={() => navigation.navigate("Adress Item")}
          /> */}
          <AddButton
            title="Services"
            onPress={() => navigation.navigate(Services)}
          />
          <AddButton
            title="Notas"
            onPress={() => navigation.navigate(Notas)}
          />
        </View>
        
      );
      
          }
export default ListAddress;

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