import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor:'#E0F1E9',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: '30%',
    width: '100%',
    padding: 20,
  },
  image: {
    alignSelf: 'center',
    margin: 30,
    height: '100%',
    width: 600,
  },
  descripcionContainer: {
    height: '30%',
    width: '100%',
  },
  descripcion: {
    alignSelf: 'center',
    margin: 0,
    height: '100%',
    width: '100%',
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 0,
    alignSelf: 'center'
  },
  buttonATC: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#C5E3AC',
    marginBottom: 30,
    height: 80,
    width: '50%'
  }
})

 