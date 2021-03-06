import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/reducer'

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.list)
  console.log(cartItems)

  const dispatch = useDispatch()
  const removeItemFromCart = item => {
    dispatch(REMOVE_FROM_CART(item))
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
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
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      )}
    </View>
  )
}

export default CartScreen

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
    backgroundColor: '#ff333390',
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartMessage: {
    fontSize: 28,
  },
})
