import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import AddButton from "../Components/AddButton";
import { colors } from "../Global/Colors";
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { usePostProfileImageMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "../features/User/userSlice";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value);

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {

        //Permission for camera
        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                //base64: true,
                quality: 1,
            });

            console.log(result.assets);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
        alert("foto cambiada")
        // SI ES EN WEB, PARA PROBAR, DEJO ESTAS DOS LINEAS Y COMENTO TODO EL TRY ,CATCH
        // dispatch(saveImage(image))
        // navigation.goBack()
        // SI NO ESTOY PROBANDO, PARA CELU, DEJAR ESTO: (TRY,CATCH)
        try {
            // Request device storage access permission
            const { status } = await MediaLibrary.requestPermissionsAsync();  
            console.log("STATUSSSS", status);
            if (status === "granted") {
                console.log("Only valid on emulators and physical devices");
                // Save image to media library and create an asset
                const response = await MediaLibrary.createAssetAsync(image);
                console.log("URI ????",response.uri);
                //Save image link on profileImages remote location
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                // Set image on redux state
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Tomar otra.." onPress={pickImage} />
                    <AddButton title="Confirmar foto!" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>Desea tomar una foto?</Text>
                    </View>
                    <AddButton title="Tomar una foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.red,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
