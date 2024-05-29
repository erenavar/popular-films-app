import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    title:string,
    img:string,
    year:string
}

export default function FilmCard (props:Props) {
  return (
    <View>
      <Image
      style={styles.image}
        source={{uri:"https://image.tmdb.org/t/p/w500/"+props.img}}
      />
      <Text style={styles.filmName}>{props.title}</Text>
      <Text style={styles.filmName}>{props.year}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      height:50,
      width:50
    },
    filmName:{
        color:"white"
    }
})