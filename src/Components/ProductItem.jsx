import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'


const ProductItem = ({ item , navigation }) => {

  const { width, height } = useWindowDimensions()

  const onSelect = (id) => {
   navigation.navigate('ItemDetail', { item:item , productId: item.id} )
  }

  return (
    <Pressable onPress={ () => onSelect(item.id)}>
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
      <Text style={width > 350 ?  styles.textCategory : styles.textCategorySm}>{item.title}</Text>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: '40%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8
  },
  textCategory: {
    width: '50%',
    fontSize: 22
  },
  textCategorySm: {
    width: '50%',
    fontSize: 15
  },
  additionalStylesCard: { 
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  }
})