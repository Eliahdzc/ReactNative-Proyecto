import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = ({ modalVisible, onHandleDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text>Eliminar Receta</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Deseas eliminar receta?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="Confirmar" onPress={onHandleDelete} />
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#646cff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    backgroundColor: "#E0F1E9",
    color: '#fff',
    fontSize: 18,
    padding:  10,
    borderRadius: 20,
  },
  modalMessage: {
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 15,
    color: "#E0F1E9",
    backgroundColor: "#E0F1E9",
  },
})
