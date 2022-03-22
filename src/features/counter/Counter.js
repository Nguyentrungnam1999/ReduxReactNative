import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decredement, incredement } from './counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(incredement())
        }}>
        <Text>incredement</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(decredement())
        }}>
        <Text>decredement</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})
