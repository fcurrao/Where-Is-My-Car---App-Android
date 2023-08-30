import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/Shop/shopSlice'

const CategoryItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelectCategory = () => {
    dispatch(setCategorySelected(item))
    navigation.navigate('ItemListCategory', {category: item})
  }
  return (
      <Pressable
        onPress={onSelectCategory}
      >
        <Card
          additionalStyle={styles.additionalStyle}
        >
            <Text style={styles.textCategory}>{item}</Text>
        </Card>
      </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({

    textCategory: {
        fontSize: 18
    },
    additionalStyle: { 
      borderRadius: 15,
      marginTop: "25px",
    height: '170px',
    width: '120px'
    }
})

// import { Pressable, StyleSheet, Text } from 'react-native'
// import React from 'react'
// import Card from './Card'
// import { useDispatch } from 'react-redux'
// import { setCategorySelected } from '../features/Shop/shopSlice'

// const CategoryItem = ({
//   item,
//   navigation, route
// }) => {

//   const dispatch = useDispatch()

//   const onSelectCategory = () => {
//     dispatch(setCategorySelected(item))
//     navigation.navigate('ItemListCategory' , {category: item} )
//   }


//   return (
//     <Pressable
//       onPress={onSelectCategory}>
//       <Card>
//           <Text style={styles.textCategory}>{item}</Text>
//       </Card>
//     </Pressable>
//   )
// }

// export default CategoryItem

// const styles = StyleSheet.create({
//     textCategory: {
//         fontSize: 18
//     }
// })