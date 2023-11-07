import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "../../components/Modal";
import Logo from "../../components/Logo";
import fonts from "../global/fonts";
import { useFonts } from "expo-font";
import { useSelector } from 'react-redux'
import styles from './Principal.styles.js'


export const Principal = ({navigation}) => {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [enviarActivado, setEnviarActivado] = useState(false);
  const [fontsLoaded] = useFonts(fonts);
  const userName = useSelector(state => state.auth.userName)


  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    if (textValue === "") {
      return;
    }
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    console.log(itemSelected);
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  if (!fontsLoaded) return null;

  const clicEnviar = () => {
    setEnviarActivado(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View>
        <Text style={styles.recepies}>Hola {userName}</Text>
      </View>
      {enviarActivado ? (
        <View>
          <Text style={styles.recepies}>
            Proximamente recibiras tus recetas de
          </Text>
          <Text style={styles.textList}>
            {itemsList.map((elem) => `${elem.value} `)}
          </Text>
        </View>
      ) : (
        <>
          <View>
            <Text style={styles.recepies}>
              Recetas que te gustaría recibir
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ingresa la Receta"
              value={textValue}
              onChangeText={onHandleChangeItem}
            />
            <Button
              title="Agregar"
              color={"#646cff"}
              borderRadius={30}
              onPress={addItem}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              title="Enviar"
              color={"#646cff"}
              borderRadius={30}
              onPress={clicEnviar}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={itemsList}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      )}

      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  );
};

export default Principal;

