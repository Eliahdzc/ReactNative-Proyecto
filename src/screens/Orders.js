import { Animated, Button, Text, View } from 'react-native'
import React, {useRef} from 'react'
import styles from './Orders.styles'
import { SafeAreaView } from 'react-native-safe-area-context'


const Orders = ({route}) => {
    let orderId = ''
    if (route.params) {
        orderId = route.params.orderId;
    }
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
      ]}>

        <Text style={styles.title}>Felicidades!</Text>
        <Text style={styles.texto}>Tu orden has sido procesada</Text>
        <Text style={styles.texto}>con el numero</Text>
        <Text style={styles.texto}>{orderId}</Text>
        <Text style={styles.texto}>Pronto recibiras tu pedido!!</Text>
      </Animated.View>
        <View style={styles.buttonRow}>
        <Button color={"#646cff"} title="Ver Orden" onPress={fadeIn} />
      </View>
  </SafeAreaView>
  )
}
export default Orders
