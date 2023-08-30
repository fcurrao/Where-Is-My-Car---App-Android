// import { FlatList, StyleSheet, Text, Image, Platform, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from './CategoryItem'  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import ItemDetail from '../Screens/ItemDetail';
import Item from './Itemxd' 

import Home from '../Screens/Home';
import {
    Ionicons,
    
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,
    FontAwesome5,

} from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar'; 
import {
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';
 
 


const Itemxd = ({
    navigation, route,ttt
}) => {








  function probando () {
    alert("probando")
  }

  let data = [
    {
        id: 1,
        name: "https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/306166668_5312968442105681_4216744266306953240_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=-FDSQlYHVHAAX9qfSYQ&_nc_ht=scontent.faep14-2.fna&oh=00_AfBKQKxQrFn3Ti_hzqPWg3ovvFVTUN7Syn4uH7oLNaomxA&oe=64EDD138"

    },
    {
      id: 2,   
      name: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112011/logo_banco_hipotecario_0.ai-converted.png?itok=glHHD4OS"

    },
    {
      id: 3,   
      name: "https://furp.org.ar/cont/news/imagePot/FURP-03012020174858000000-5e5c1fbaed3ec.jpg" 

    }, 
    {
        id: 4,
        name: "https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-6/220307823_4065997776801574_4124459960378727239_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mI8D1J7nRaAAX_mZSFu&_nc_ht=scontent.faep14-3.fna&oh=00_AfCMxvjcugh8G-BiMxzFj-cipDhw7rx7QJWB7WI0V6Irkg&oe=64EDA240"
    },
    {
        id: 5,
        name: "https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600,c_limit/Mastercard3-1.jpg"
    },
    {
        id: 6,
        name: "https://lavozdelpueblo.com.ar/recursos/fotos/2022/03/08/lvp.mpo-696x464.jpeg"

    }, 
]
const SECTIONS = [{ title: ' ',
data: [
  {
    key: ' ',
    text: ' ',
    uri: ' ',
  }]}]
   
 
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

    // return (
{/* <View style={styles.container}> 
 <Text> {ttt} </Text>
 <Text> hola </Text>
 
</View> */}

 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
                     
 
      
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderItem={({ item, section }) => {
            return <>
           
           


           
      <View >


</View>

<View style={styles.container}>
    <Image
        style={styles.imageBoard}
        source={{ uri: "https://media.admagazine.com/photos/618a646d8124d089603b1dce/master/w_1600,c_limit/69173.jpg" }}
    />

    <View style={styles.boxs}>
    <Pressable style={styles.boxsCard} 
        onPress={probando} > 
            <FontAwesome5 
              style={[{backgroundColor:"#8BDF70", }, styles.icon]}
                name="shopping-bag"
                size={
                    28
                }
                color={
                    colors.colorblanco
                }
            />
            <Text style={styles.textIcon}> Shopping</Text>
        </Pressable>
        <Pressable style={styles.boxsCard} 
        onPress={probando} > 
            <FontAwesome
               style={[{backgroundColor:"lightblue", }, styles.icon]}
                name="cutlery"
                size={
                  32
                }
                color={
                    colors.colorblanco
                }
            />
             <Text style={styles.textIcon}>  Gastronomia</Text>
        </Pressable>
        <Pressable style={styles.boxsCard} 
        onPress={probando} > <FontAwesome5
        style={[{backgroundColor:"#E6785C", }, styles.icon]}
            name="tshirt"
            size={
              28
            }
            color={
                colors.colorblanco
            }
        />    <Text style={styles.textIcon}> Moda</Text>
        </Pressable>
        <Pressable style={styles.boxsCard} 
        onPress={probando} >  
            <FontAwesome
              style={[{backgroundColor:"#D77AE5", }, styles.icon]}
                name="car"
                size={
                  28
                }
                color={
                    colors.colorblanco
                }
            />   <Text style={styles.textIcon}>  Parking</Text> </Pressable>
           <Pressable style={styles.boxsCard}  
        onPress={probando} > <MaterialIcons
        style={[{backgroundColor:"#DDDB64", }, styles.icon]}
            name="event-available"
            size={
              28
            }
            color={
                colors.colorblanco
            }
        />    <Text style={styles.textIcon}>  Eventos</Text></Pressable>
        <Pressable style={styles.boxsCard} 
        onPress={probando} ><Ionicons
        style={[{backgroundColor:"#EC7696", }, styles.icon]} 
            name="person-circle-outline"
            size={
              28
            }
            color={
                colors.colorblanco
            }
        />   <Text style={styles.textIcon}>      Mas</Text>
        </Pressable>
    </View>
    {/* <View> */}


        <View style={styles.container2}> 
<FlatList
data = {data}
keyExtractor={data => data}
renderItem={({item}) =>  

<Image
style={styles.image}
source={{ uri: `${item.name}` }}
/> 
}
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
contentContainerStyle={styles.wrapper}
horizontal={true}
style={styles.flatlist}

 

/> 
 
</View>  

{/* // FLATLIST VERTICAL */}

        <View style={styles.container3}>  
        
        <View > 
        <View style={styles.containerCardsDown}> 
            <Text  style={styles.ttextbold} >
                Destacados:
            </Text>
        <View style={styles.cardsDown}>
        <Ionicons name="flower-outline" size={24} color={colors.color5}/>
            </View>
            </View>
            <View style={styles.containerCardsDown}> 

            <Text  style={styles.ttextbold} >
                    Carga tus facturas
                </Text>
            <View style={styles.cardsDown}>
            <Ionicons name="flower-outline" size={24} color={colors.color5} />
            </View>
            <View style={styles.cardsDown}>
            <Ionicons name="flower-outline" size={24}color={colors.color5} />
            </View>
            </View>
            <View style={styles.containerCardsDown}> 
            <Text  style={styles.ttextbold} >
                    Beneficios y mas
                </Text>
            <View style={styles.cardsDown}>
            <Ionicons name="flower-outline" size={24} color={colors.color5} />
            </View>
            <View>
            </View>
            
            </View>
        </View>
        <View>
          Sigue la web
        </View>

    </View>

</View>
 
            </> 
          }}
        />
        
      </SafeAreaView>
    </View>
  );
};


    //  )
    // }



    
export default Itemxd

const styles = StyleSheet.create({
 
    container: {
      fontFamily: 'Josefin',
      flex: 1,
      backgroundColor: '#121212',
    },
    sectionHeader: {
      fontFamily: 'Josefin',
      fontWeight: '800',
      fontSize: 18,
      color: '#f4f4f4',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      fontFamily: 'Josefin',
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      fontFamily: 'Josefin',
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    }, 


    container: {
      fontFamily: 'Josefin',
    backgroundColor: colors.colorblanco,
    width:"100%", 
    height:"100%", 
    },
    boxs: {
      fontFamily: 'Josefin',
        paddingTop: "4%",
        paddingBottom: "4%",
        paddingLeft: "9%",
        paddingRight: "9%", 
        backgroundColor: colors.colorblanco,
        display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", 
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "flex-end",
    },
    textIcon:{
      fontSize: "medium",
      fontFamily: 'Josefin',
      whiteSpace: "unset",
      height: "10px",
    },
    icon: {  
      fontFamily: 'Josefin',
      whiteSpace: "unset",
      width: "60px", 
      borderRadius: "50%",
      padding: "15px", 
      
    },
    boxsCard:{ 
      fontFamily: 'Josefin',
      whiteSpace: "unset",
      width: "60px",
      height: "85px",
      justifyContent: "center",
        alignItems: "center",
        margin: "4%",
    },
    flatprobando: {
      fontFamily: 'Josefin',
        backgroundColor: "red",
        width: "50%",
    }, 
    wrapper: {
      gap: 20, 
    },
    container2: {
      fontFamily: 'Josefin',
      backgroundColor: colors.colorblanco,
      alignItems: 'center',
      height:"5",  
      marginBottom: "5%",
    },
    flatlist: {
      width: '90%',  
    },   
    ttext: {
      fontFamily: 'Josefin',
    }, 
    ttextbold: {
      fontSize: "medium",
      fontFamily: 'Josefin',
    }, 
    cardsDown: {
      fontFamily: 'Josefin',
      margin: "12px",
      webkitBoxShadow:"10px 10px 5px 4px white",
      mozBoxShadow:"10px 10px 5px 4px black", 
      boxShadow: "5px 5px 10px 5px #eeeaea",
      borderBottomLeftRadius: "2px",
      borderBottomRightRadius: "2px",
      padding: "10px",
    },

      // container2: {
      //   backgroundColor: colors.colorblanco,
      //   alignItems: 'center',
      //   height:'100%',  
      // },
      containerCardsDown: {
        fontFamily: 'Josefin',
        margin: "10px",
        marginBottom: "15px",  
      }, 
      container3: {
        fontFamily: 'Josefin',
        margin: "10px",
        marginBottom: "15px",  
      }, 
      image: { 
        height: '80px',
        width: '100%',
        marginBottom: '5%',
        minWidth: 150,
        maxWidth: 250,
        borderRadius: 8
      },
      imageBoard: {
        height: '180px',
        width: '90%',
        borderRadius: 8,
        margin: "5%",
      },
})