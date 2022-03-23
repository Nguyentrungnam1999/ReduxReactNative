import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import Counter from './src/features/counter/Counter'
import AppNavigation from './src/navigation/AppNavigation'
import store from './src/redux/store'

const App = () => {
  console.log(store)
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
