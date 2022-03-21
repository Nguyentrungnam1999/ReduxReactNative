import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoList from './src/Components/TodoList'
import { Divider } from 'react-native-paper'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text> TODO APP with REDUX</Text>
        </View>
        <Divider />
        <TodoList />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
