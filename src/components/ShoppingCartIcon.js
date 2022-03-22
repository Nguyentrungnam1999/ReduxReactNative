import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCartIcon = props => {
  const navigation = useNavigation()
  const cartItem = useSelector(state => state)
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cart')
      }}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItem.length}</Text>
      </View>
      <Icon name="rocket" size={30} color="#101010" />
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
