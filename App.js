import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import Counter from './src/features/counter/Counter'
import AppNavigation from './src/navigation/AppNavigation'
import store from './src/redux/store'
import GetData from './src/components/GetData'

const App = () => {
  // console.log(store)
  return (
    // <Provider store={store}>
    //   <AppNavigation />
    // </Provider>
    <View style={{ flex: 1 }}>
      <Text>asd</Text>
      <GetData />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
