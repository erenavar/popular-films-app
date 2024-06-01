import { ImageBackground, Image, StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteStackParamList } from '../../navigation /MainNavigation';
import { LinearGradient } from "expo-linear-gradient";
import { defineLocale } from 'moment';

interface Params {
  id: number
}

interface IProps extends NativeStackScreenProps<RouteStackParamList, "Details"> {

}

export default function DetailsScreen({ route, navigation }: IProps) {
  // export default function DetailsScreen: FC<IProps>({ route }:IProps) {

  const { data, isPending } = useQuery({
    queryKey: ['Details', route.params.id],
    queryFn: async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5ZTk1MTlmNjU0MmEyNDE4ZjYzNzdkZTM5NmZkYSIsInN1YiI6IjY2NGNlZjhmYmY3YmFlZWU3Y2NkZDQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JmYF_tq5R6dAQSEXgsfapOpdC3v3W03yAL9lc1d3tw'
          }
        })
        return await response.json();
      } catch (error) {
        console.log("Error:", error)
      }
    }
  })


  // console.log(data)
  // console.log(`https://image.tmdb.org/t/p/w500${data?.poster_path}`)

  return (
    <View style={styles.container}>
      {isPending ?
        <ActivityIndicator /> :
        <ImageBackground
          resizeMode="stretch"
          style={styles.image}
          source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        >

          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={styles.transparentLayer}
          />
          <Text style={styles.filmName} numberOfLines={2}>{data.title}</Text>

          {/* <Image
            style={styles.transparentLayer}
            source={require("../../../assets/images/1.png")}
          /> */}



        </ImageBackground>

      }
    </View>
  )
}
const width = Dimensions.get("window").width
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: width,
    width: width
  },
  transparentLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  filmName: {
    paddingTop: "70%",
    color: "white",
    fontSize: 30,
    height: "100%",

    fontWeight: "bold",




  },

})