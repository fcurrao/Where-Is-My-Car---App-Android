import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";
import React, { useState } from "react";



const OrdenItemDetail = ({title, price,quantity, id, subTotal}) => {
 




    return (
        <> 
            <View  style={styles.totalContainer} onPress={() => { }}>
                <View >
                    <Text style={styles.text1}> {quantity} units of {title} (${price}) | ${subTotal}  </Text> 
                </View>
            </View>
         
        </>
    );
};



export default OrdenItemDetail;

const styles = StyleSheet.create({
    totalContainer: {
    height: 100, 
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
    text1: {
        fontFamily: "Josefin",
        fontSize: 22,
        color: "gray"
    }, 
});
