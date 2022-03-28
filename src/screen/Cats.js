import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCat, loadingCat } from '../redux/reducer'
import { Divider } from 'react-native-paper'

const Cats = () => {
  const cats = useSelector(state => state.cart.cats.listcat)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadingCat())
  }, [])
  console.log(cats)
  // return <Text>1</Text>
  return (
    <ScrollView>
      <Text>Cats</Text>
      <Divider />
      <View style={{ width: '100%' }}>
        {cats.map(item => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                marginTop: 20,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                marginHorizontal: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <View style={{ borderRadius: 10, marginHorizontal: 5 }}>
                <Image
                  source={{ uri: item.image.url }}
                  style={{ height: 100, width: 100, borderRadius: 10 }}
                />
              </View>
              <View style={{ width: '65%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Temperament:{item.temperament}
                </Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Cats

const styles = StyleSheet.create({})
