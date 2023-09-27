import {Text, View, Button} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
// import fonts from "../global/fonts";
// import { useFonts } from "expo-font";

export const Descripcion = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Descripcion de Producto</Text>
            <Button
                title="Descripcion de Producto"
                onPress={() => navigation.navigate('Descripcion')}
            />
        </View>
    )
};

export default Descripcion;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E0F1E9",
//         alignItems: "center",
//         justifyContent: "top",
//         paddingTop: 50,
//     }
// });