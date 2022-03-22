import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native'
import React from 'react'
import Iconicons from 'react-native-vector-icons/Ionicons'
import ShoppingCartIcon from '../components/ShoppingCartIcon'
import { books } from '../utils/Data'
import { ADD_TO_CART } from '../redux/CartItem'
import { useDispatch } from 'react-redux'

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

const BooksScreen = () => {
  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => (
          <View style={styles.bookItemContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.textAuthor}>by {item.author}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => addItemToCart(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default BooksScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#24a0ed',
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
})
