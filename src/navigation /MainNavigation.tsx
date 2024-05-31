import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmsListScreen from '../screens/popularFilms/FilmsListScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

type RouteStackParamList = {
  FilmList: undefined,
  Details: {
    id: number
  }
}

const Stack = createNativeStackNavigator<RouteStackParamList>();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FilmList" component={FilmsListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { RouteStackParamList };
const styles = StyleSheet.create({})