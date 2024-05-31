import { StyleSheet, Text, View } from 'react-native'
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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}`, {
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


  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})