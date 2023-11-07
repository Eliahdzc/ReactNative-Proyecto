import {Text, View, FlatList, TouchableOpacity, Image} from "react-native";
import React from "react";
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../services/shopApi.js';
import { useSelector } from 'react-redux'
import styles from './Productos.styles.js'


export const Productos = ({navigation, route}) => {
    // El valor default de categoria es Pasteles
    let categoria = 'Pasteles'
    if (route.params) {
        categoria = route.params.category;
    }

    const [products, setProducts] = useState([])
    const { data, isLoading } = useGetProductsQuery();

    useEffect(() => {
        const datosFiltradosPorCategoria = data?.filter(elem => elem.categoria.tipo === categoria)
        setProducts(datosFiltradosPorCategoria)
    }, [categoria, data])


    const userName = useSelector(state => state.auth.userName)
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
            <Text>Puedes iniciar tu compra {userName}</Text>

            <View style={styles.listContainer}>

                <FlatList
                    data={products}
                    numColumns={2}
                    columnWrapperStyle={styles.weapperStyle}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.productContainer}
                            onPress={() => navigation.navigate('Descripcion', { product: item })}
                        >
                            {returningImage(item)}
                            {/* {returningDescripcion(item)} */}
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.price}>{`$${item.precio}`}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => `prod-${index}`}
                />
            </View>
        </View>
    )
};

export default Productos;
