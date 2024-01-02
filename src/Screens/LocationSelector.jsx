import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import AddButton from "../Components/AddButton";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/User/userSlice";
import { colors } from "../Global/Colors";
import MapPreview from "../Components/MapPreview";
import { google_maps_api_key } from "../Database/firebaseConfig";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState("");
    const [inputtextoa, setInputtextoa] = useState("");
    const [inputtextob, setInputtextob] = useState("");

    const [address, setAddress] = useState(null);

    const { localId } = useSelector(state => state.userReducer.value)
    const [triggerPostAddress, result] = usePostUserLocationMutation();
    const dispatch = useDispatch();

    const goBack = () => {
        navigation.goBack()
    }
    const onConfirmAddress = () => {
        alert("Direccion cambiada")
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
            inputtextoa: inputtextoa,
            inputtextob: inputtextob,
        }
        console.log("allaaa")
        console.log(locationFormatted)
        console.log("allaaa")
        dispatch(setUserLocation(locationFormatted))

        triggerPostAddress({ location: locationFormatted, localId })
        navigation.goBack()
    }

    //Location requested on mount
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setError("Permission to access location was denied");
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });

            } catch (error) {
                console.log(error.message);
                setError(error.message)
            }
        })();
    }, []);

    //Reverse geocoding
    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${google_maps_api_key}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location]);

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Mi Ubicacion</Text>
            {/* Flatlist con las directions */}
            {location ? (
                <>
                    <Text
                        style={styles.text2}
                    >Lat: {location.latitude}, long: {location.longitude}.
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputtextoa}
                        value={inputtextoa}
                        placeholder="comentario"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputtextob}
                        value={inputtextob}
                        placeholder="comentario"
                    />
                    <Text style={styles.address}>
                        {address}
                    </Text>
                    <MapPreview location={location} />
                    <AddButton
                        onPress={onConfirmAddress}
                        title="Confirmar dirección"
                    />
                    <AddButton
                        onPress={goBack}
                        title="Volver"
                    />
                </>
            ) : (
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        paddingTop: 15,
        fontFamily: 'Josefin',
        fontWeight: 900,
        fontSize: 24
    }, text2: {
        paddingTop: 5,
        fontFamily: 'Josefin',
        color: 'gray',
        fontSize: 16
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.peach,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        // fontFamily: "Ubuntu",
        fontWeight: 900,
        fontSize: 18,
    }, input: {
        height: 40,
        width: 220,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }, 
});