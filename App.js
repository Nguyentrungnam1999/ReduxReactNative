import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from './src/app/store'
import Counter from './src/features/counter/Counter'

const App = () => {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
