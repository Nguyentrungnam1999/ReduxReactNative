import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import ShoppingCartIcon from '../components/ShoppingCartIcon'
import BooksScreen from '../screen/BooksScreen'
import CartScreen from '../screen/CartScreen'

export default function AppNavigation() {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Book"
          component={BooksScreen}
          options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
        />
        <stack.Screen name="Cart" component={CartScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
