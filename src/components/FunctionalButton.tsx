import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface IButtonName {
  title: string,
  symbolName: string
}

export default function FunctionalButton(props: IButtonName) {
  return (
    <View style={styles.container}>
      <FontAwesome name={props.symbolName} size={35} color="white" />
      <Text style={styles.functionName}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15
  },
  functionName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }

})