import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface IButtonName {
  title: string
}

export default function FunctionalButton(props: IButtonName) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{props.title}</Text>
      <FontAwesome name="share-alt" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})