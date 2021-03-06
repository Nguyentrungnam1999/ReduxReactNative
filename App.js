import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import Counter from './src/features/counter/Counter'
import AppNavigation from './src/navigation/AppNavigation'
import store from './src/redux/store'
import GetData from './src/components/GetData'
import Login from './src/screen/Login'
import Cats from './src/screen/Cats'

const App = () => {
  // console.log(store)
  return (
    <Provider store={store}>
      {/* <AppNavigation /> */}
      {/* <Login /> */}
      {/* <Counter /> */}
      <Cats />
    </Provider>
    // <View style={{ flex: 1 }}>
    //   <Text>asd</Text>
    //   <GetData />
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})
