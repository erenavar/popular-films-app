import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { FilmResponse } from './types'
import FilmCard from '../../components/FilmCard'

export default function FilmsListScreen() {


  const { data } = useQuery<FilmResponse>({
    queryKey: ['populerFilms'],
    queryFn: async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTliM2U2OGY5YzQ0OGRjNDljY2JmMDEzMWI5N2Y0OCIsInN1YiI6IjY2NGNlZjhmYmY3YmFlZWU3Y2NkZDQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WHSBp9dcu_icb7MBwIRg5D6Dbx7uYNyq-Bs68tBTZE4'
        }
      })
      return await response.json();
    }
  })

  const numberOfFilms: number = data?.results?.length ?? 0;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{numberOfFilms} {numberOfFilms > 1 ? "videos" : "video"}</Text>
        <Pressable style={styles.filterButton}><Text style={styles.filterText}>Filter</Text></Pressable>
      </View>


      <FlatList
        data={data?.results}
        renderItem={({ item }) => <FilmCard title={item.title} img={item.poster_path} year={item.release_date} />}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  titleText: {
    color: "lightgray",
    fontSize: 18
  },
  filterButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 20,
    width: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
  filterText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
})