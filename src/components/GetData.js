import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetData = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2')
      const json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(getMovies)
    getMovies()
  }, [])

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>
            {item.id}, {item.email}
          </Text>
        )}
      />
    </View>
  )
}

export default GetData

const styles = StyleSheet.create({})
