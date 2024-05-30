import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

interface Params {
  id: number
}

export default function DetailsScreen({ route }) {

  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})