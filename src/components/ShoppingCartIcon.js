import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCartIcon = props => {
  const navigation = useNavigation()
  const cartItem = useSelector(state => state.cart.list.length)
  console.log(cartItem)
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cart')
      }}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItem}</Text>
      </View>
      <FontAwesome name="shopping-cart" size={30} color="#101010" />
    </TouchableOpacity>
  )
}

export default ShoppingCartIcon

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
