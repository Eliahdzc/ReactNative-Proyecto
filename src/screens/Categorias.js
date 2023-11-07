import {Text, View, Button, FlatList, TouchableOpacity, Image} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from './Categorias.styles.js'
import { useGetCategoriesQuery } from '../services/shopApi.js';
import { useSelector } from 'react-redux'
// import fonts from "../global/fonts";
// import { useFonts } from "expo-font";

export const Categorias = ({navigation}) => {
    // const { data, isLoading } = useGetProductsQuery();
    const { data, isLoading } = useGetCategoriesQuery();
    // console.log('datos',data)
    // console.log('useGetProductsQuery',useGetProductsQuery())
    // console.log('useGetCategoriesQuery',useGetCategoriesQuery())
    const userName = useSelector(state => state.auth.userName)
    const returningImage = (item) => {
        return (
            <Image
                style={styles.image}
                source={{uri: item.imagen}}
            />
        )
    }

    // const returningProductosPorCategoria = (item) => {
    //   if (item.tipo = item.title){ }
    //     return (
    //         <Image
    //             style={styles.descripcion}
    //             source={{uri: item.descripcion}}
    //         />
    //     )
    // }

    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Puedes iniciar tu compra {userName}</Text>

            <View style={styles.listContainer}>

                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={styles.weapperStyle}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.productContainer}
                            onPress={() => navigation.navigate('ProductosPorCategoria', {category: item.title})}
                        >
                            {returningImage(item)}
                            {/* {returningDescripcion(item)} */}
                            <Text style={styles.title}>{item.title}</Text>
                            {/* <Text style={styles.price}>{`$${item.precio}`}</Text> */}
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => `category-${index}`}
                />
            </View>
        </View>
    )
};

export default Categorias;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E0F1E9",
//         alignItems: "center",
//         justifyContent: "top",
//         paddingTop: 50,
//     }
// });