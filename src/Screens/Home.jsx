import { FlatList, StyleSheet, Text, Image, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'  

const Home = ({
    navigation, route
}) => {
  
  const {width, height} = useWindowDimensions()
  console.log(  "tu dimencion es :  altura: ", height, "Ancho: " , width)
  console.log ( "tu plataforma es:",  Platform.OS )
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()

   

  console.log("cat",categories);
  console.log("loading",isLoading);
  console.log("err",isError);
  
  return (
    <View style={styles.container}>
        {/* <Counter/> */}
      <FlatList
           data = {categories}
           keyExtractor={category => category}
           renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.wrapper}
           horizontal={true}
           style={styles.flatlist}
        /> 
        <Image
        style={styles.image}
        source={{ uri: 'https://mecaluxes.cdnwm.com/blog/img/almacen-transito-leroy-merlin-guadalajara-bricolaje-jardineria.1.0.jpg' }}
      /> 
             
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        gap: 20, 
      },
      container: {
        backgroundColor: colors.colorblanco,
        alignItems: 'center',
        height:'100%',  
      },
      flatlist: {
        width: '90%',
        flexGrow:0.25,  
      },  
      image: { 
        height: '120px',
        width: '100%',
        marginBottom: '5%',
        minWidth: 150,
        maxWidth: 250,
        borderRadius: 8
      },
})