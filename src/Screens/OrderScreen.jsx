import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import OrderItem from '../Components/OrdenItem'  

import { colors } from "../Global/Colors";
import { useSelector } from "react-redux";

const OrderScreen = () => {
  const {items : CartData} = useSelector(state => state.orderReducer.value) 
 

  return (
    <View style={styles.container}> 
        {CartData == undefined ||    CartData == null ? (
            <>
            
            </>
           ) : (<>  
        <OrderItem  order={CartData}/>  
           </>)}
     
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.colorblanco,
    flex: "1",
    transform:" translateZ(0px)",
    overflowY:"auto",
    flexShrink:1,
    flexGrow: 1,
    flexDirection: "column",
    overflowX: "hidden",
  }
})
 