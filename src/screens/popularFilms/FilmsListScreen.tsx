import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { FilmResponse } from './types'
import FilmCard from '../../components/FilmCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteStackParamList } from '../../navigation /MainNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'


interface INavigation extends NativeStackScreenProps<RouteStackParamList, "FilmList"> { }


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5ZTk1MTlmNjU0MmEyNDE4ZjYzNzdkZTM5NmZkYSIsInN1YiI6IjY2NGNlZjhmYmY3YmFlZWU3Y2NkZDQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JmYF_tq5R6dAQSEXgsfapOpdC3v3W03yAL9lc1d3tw'
export default function FilmsListScreen({ navigation }: INavigation) {

  // const navigation = useNavigation<string>();
  const { data } = useQuery<FilmResponse>({
    queryKey: ['populerFilms'],
    queryFn: async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5ZTk1MTlmNjU0MmEyNDE4ZjYzNzdkZTM5NmZkYSIsInN1YiI6IjY2NGNlZjhmYmY3YmFlZWU3Y2NkZDQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JmYF_tq5R6dAQSEXgsfapOpdC3v3W03yAL9lc1d3tw'
        }
      })
      return await response.json();
    }
  })

  const numberOfFilms: number = data?.results?.length ?? 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{numberOfFilms} {numberOfFilms > 1 ? "videos" : "video"}</Text>
        <Pressable style={styles.filterButton}><Text style={styles.filterText}>Filter</Text></Pressable>
      </View>
      <FlatList
        data={data?.results}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Details", { id: item.id })}>
            <FilmCard title={item.title} img={item.poster_path} year={item.release_date} />
          </Pressable>
        )}
      />
    </SafeAreaView>
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