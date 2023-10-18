import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import CartItem from '../components/CartItem'
import styles from './Cart.styles'
import { usePostOrderMutation } from '../services/shopApi'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const {total} = useSelector(state => state.cart)
    const [triggerPost, result] = usePostOrderMutation()

    const renderItem = ({ item }) => <CartItem item={item} />

    const confirmCart = () => {
        triggerPost({ total, cart, user: 'LoggedUser' })
    }
    return (
        <View style={styles.container}>
        <View style={styles.listContainer}>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Pressable onPress={confirmCart}>
            {/* onPress={() => navigation.navigate('Descripcion', {product: item})} */}

                <Text style={{textAlign: 'center', color: 'black', fontSize: 36 }}>Confirm</Text>
                <View>
                    <Text style={{textAlign: 'center', color: 'black', fontSize: 36 }}>{`Total $${total}`}</Text>
                </View>
            </Pressable>
        </View>
        </View>
    )
}

export default Cart
