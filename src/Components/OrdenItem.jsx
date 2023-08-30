import { StyleSheet, FlatList,Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"; 
import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import OrdenItemDetail from "./OrdenItemDetail";



const OrderItem = ({ order}) => {
    return (
<> 

<View style={styles.container}>  
{order.map(eachOrder=> <>  
<View   style={styles.card} > 
<Text   style={styles.text4}>  Numero orden:{eachOrder.numberOrder}</Text> 
<Text   style={styles.text4}>  Fecha:{eachOrder.updatedAt}</Text> 
<FlatList 
    data={eachOrder.CartData}
    keyExtractor={item => item.id}
    renderItem={({item}) => 
    <>
    <OrdenItemDetail  id={item.id} title={item.title} price={item.price} quantity={item.quantity} subTotal={item.quantity*item.price} />
    </>

}
  />
 

   <Text   style={styles.text4}>  Total orden:{eachOrder.total}</Text>
   </View>
  </>
  )} 
     </View>
 

              </>  
              );
            };
       


export default OrderItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    card: {
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.peach,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10, 
        justifyContent: "space-between",
        alignItems: "center",  
    },
    card2: {
        height: "min-content",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: "black",
    },
    text1: { 
        fontFamily: "Josefin",
        fontSize: 22,
        color: "gray", 
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "gray", 
    },
    text3: { 
        fontSize: 20,
        color: "black", 
    },
    text4: { 
        fontFamily: "Josefin",
        fontSize: 22,
        color: "white",  
    },
});
