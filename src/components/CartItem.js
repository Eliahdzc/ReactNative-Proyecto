import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'
import styles from './CartItem.styles'

const CartItem = ({ item }) => {
    console.log('item', item)
    const dispatch = useDispatch();
    const removeItemFromCart = () => {
        dispatch(removeItem({item: item}))
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.imagen,
                    }}
                />
            </View>
            <View>
                <Text style={styles.name}>{item.titulo}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.name}>{item.quantity}</Text>
                    <Text style={styles.name}>{item.precio}</Text>
                </View>
                <Pressable onPress={removeItemFromCart}>
                    <Feather name="trash" size={20} color={'#646cff'} />
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem

