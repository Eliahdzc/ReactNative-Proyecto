import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './CartItem.styles'

const CartItem = ({ item }) => {
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
                <Pressable>
                    <Feather name="trash" size={35} color={'red'} />
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem

