import { Image, Button, SafeAreaView, Text, View, Pressable } from 'react-native'
import React from 'react'
import { addItem } from '../features/cart/cartSlice'
import styles from './Descripcion.styles'
import { useDispatch, useSelector } from 'react-redux'

const Descripcion = ({navigation, route }) => {
    let product = {};
    if (route.params) {
        product = route.params.product;
    }

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }))
    }

    const total = useSelector(state => state.cart)

    return (
        <SafeAreaView style={styles.container}>

            {!!Object.keys(product).length ?
                <>
                    <View style={styles.imageContainer}>
                        <Text style={styles.title}>{product.titulo}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: product.imagen }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.descripcionContainer}>
                        <Image
                            style={styles.descripcion}
                            source={{ uri: product.descripcion }}
                            resizeMode="cover"
                        />
                    </View>
                    <Text style={styles.price}>Precio {`$ ${product.precio}`}</Text>
                    <Pressable
                        style={styles.buttonATC}
                        onPress={() => {
                            handleAddToCart();
                            navigation.navigate('Productos')
                        }}
                    >
                        <Text style={{textAlign: 'center', color: 'black', fontSize: 20 }}>Agregar al carrito</Text>

                    </Pressable>
                </>
                :   <View  style={{...styles.container, backgroundColor: '#EDEDED', width: '100%'}}>
                        <Text style={{fontSize: 24, fontWeight: 700}}>Necesita primero seleccionar un producto</Text>
                    </View>
            }
        </SafeAreaView>
    )
}

export default Descripcion;

