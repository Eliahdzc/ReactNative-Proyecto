import {Text, View, Button} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
// import fonts from "../global/fonts";
// import { useFonts } from "expo-font";

export const Productos = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Productos</Text>
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