import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  weapperStyle: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '47%',
    backgroundColor: '#E0F1E9',
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10,
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  descripcion: {
    alignSelf: 'center',
    height: 150,
    width: 270,
  },
  title: {
    fontWeight: '700',
    fontVariant: 'small-caps',
    alignSelf: 'center',
  },
  price: {
    fontSize: 20,
    fontVariant: '',
    alignSelf: 'center',
  },
})