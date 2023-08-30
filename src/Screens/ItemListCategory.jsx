import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import productsRaw from '../Data/products.json'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'


const ItemListCategory = ({
  // category,
  // setCategory,
  // setProductSelected, 
  navigation, route
}) => {

  // const {category} = route.params // ahora lo traigo de Redux  
  // const  productsSelected = useSelector(state=> state.shopReducer.value.productsSelected )
  const categorySelected = useSelector(state=> state.shopReducer.value.categorySelected)
  const {data: productsSelected, isLoading, isError} = useGetProductsByCategoryQuery(categorySelected)

  
  console.log("productsSelected",productsSelected);
  console.log("loading",isLoading);
  console.log("err",isError);
  
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de category
    if(productsSelected) { 
      const productsFiltered = productsSelected.filter(product =>  product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }

  }, [productsSelected, keyword])


  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    <View style={styles.container}>
      
        <Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()} 
        />
      
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem  navigation={navigation}  item={item}  />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {

        height: '100%',
        backgroundColor: colors.colorblanco,
        alignItems: 'center'
    }
})