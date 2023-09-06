import { Image, View, StyleSheet } from 'react-native'

const Logo = () => {
    return (
    <View style={styles.containerLogo}>
        <Image style={styles.logo}
        source={require('../assets/logo-nuevo.png')}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },

    logo: {
        width: 150,
        height: 150,
    },

})

export default Logo