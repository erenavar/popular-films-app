import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

interface Params {
  id: number
}

export default function DetailsScreen({ route }) {

  const { data } = useQuery({
    queryKey: ['Details'],
    queryFn: async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/images`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjcxN2Q2N2UwMTUzMzMwNDI3ZDg4NTAwMzMwYzI1NyIsInN1YiI6IjY2NGNlZjhmYmY3YmFlZWU3Y2NkZDQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eIIFWzvWQcSR2yU6VStQV0wcuNNZRV8gnuTrP0vhzGc'
          }
        })
        return await response.json();
      } catch (error) {
        console.log("Error:", error)
      }
    }


  })

  //data.backdrops[0].file_path

  const imageUrl = `https://image.tmdb.org/t/p/w500${data.backdrops[0].file_path}`;


  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: 200, height: 200 }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrops[0].file_path}` }}

      ></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})