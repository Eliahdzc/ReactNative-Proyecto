import {Text, View, Button, FlatList, TouchableOpacity, Image} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from './Productos.styles.js'
import { useGetProductsQuery } from '../services/shopApi.js'
// import fonts from "../global/fonts";
// import { useFonts } from "expo-font";

export const Productos = ({navigation}) => {
    const { data, isLoading } = useGetProductsQuery();
    const returningImage = (item) => {
        return (
            <Image
                style={styles.image}
                source={{uri: item.imagen}}
            />
        )
    }

    const returningDescripcion = (item) => {
        return (
            <Image
                style={styles.descripcion}
                source={{uri: item.descripcion}}
            />
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Productos</Text>

            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={styles.weapperStyle}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.productContainer}
                            onPress={() => navigation.navigate('Descripcion', {product: item})}
                        >
                            {returningImage(item)}
                            {returningDescripcion(item)}
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.price}>{`$${item.precio}`}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button
                title="Ir a Principal"
                onPress={() => navigation.navigate('Principal')}
            />
        </View>
    )
};

export default Productos;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E0F1E9",
//         alignItems: "center",
//         justifyContent: "top",
//         paddingTop: 50,
//     }
// });