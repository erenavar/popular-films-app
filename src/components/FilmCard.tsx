import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FilmCard() {
  return (
    <View>
      <Text style={styles.filmName}>FilmCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    filmName:{
        color:"white"
    }
})