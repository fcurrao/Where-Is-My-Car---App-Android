import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

/**
 * @info este complemento es para cuando necesitamos hacer una busqueda
 * @from src/component/search
 * @param onSearch  onsearch viene de algun lado
 * @param error parametro de error
 * @param goBack 
 * @returns theComponent
 */

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    
  const {width, height} = useWindowDimensions()

  return (
    <View style={ width > 350 ? styles.container : styles.containerSm}>
        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <FontAwesome5 name="eraser" size={24} color="black" />
        </Pressable>
        
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Josefin',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    containerSm: {
        fontFamily: 'Josefin',
        flexDirection: 'column',
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        // gap: 18,
    },
    input: {
        fontFamily: 'Josefin',
        color: 'grey',
        width: 215,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.pink,
        borderRadius: 10,
    }
})