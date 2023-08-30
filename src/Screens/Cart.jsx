import { FlatList, Pressable, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices'; 
import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/Cart/cartSlice";
import { addOrder } from "../features/Orders/orders";

import { colors } from "../Global/Colors";

const Cart = () => {
    const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()

    const dispatch = useDispatch()
    let numberOrder =  Math.floor(Math.random() * 1000000);
    const onConfirm = () => {
        triggerPostCart({items: CartData, total, user, numberOrder,updatedAt})
        alert("ORDEN CONFIRMADA- GRACIAS POR COMPRAR") 
        
                dispatch(addOrder({
                    CartData , total , numberOrder, updatedAt
                })) 

                dispatch(removeCartItem({ })) 


    }

    console.log(result);

    return (
    <View style={styles.container}>  
           {total == null || total == 0  ? (
            <></>
           ) : (<>
             <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}> 
                <Button title="Confirm"
                          onPress={onConfirm}
                      ></Button>
          
            <Text>Total: ${total}</Text>
        </View>
           </>)
       } 
     
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.colorblanco,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    }
})
