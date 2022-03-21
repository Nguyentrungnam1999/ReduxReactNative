import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions'
// import uuid from 'react-native-uuid'

const TodoList = () => {
  const [todoName, setTodoName] = useState()
  const dispatch = useDispatch()

  const handlerAddTodo = () => {
    dispatch(
      addTodo({
        // id: uuid.v4(),
        name: '',
      }),
    )
  }
  const handlerInputChange = e => {
    console.log('handle: ', e.target.value)
  }
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ width: '90%', borderWidth: 1 }}
          placeholder="please add"
          onChangeText={handlerInputChange}
          value={todoName}
        />
        {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, intemIndex) => selectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
        <TouchableOpacity
          style={{ backgroundColor: 'blue' }}
          onPress={handlerAddTodo}>
          <Text style={{ color: '#FFFFFF' }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text>asdf</Text>
      </ScrollView>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})
