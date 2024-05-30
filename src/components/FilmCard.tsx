import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface Props {
  title: string;
  img: string;
  year: string;
}

export default function FilmCard(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <Image
          style={styles.image}
          source={{ uri: "https://image.tmdb.org/t/p/w500/" + props.img }}
        />
        <View style={styles.highlights}>
          <Text numberOfLines={4} style={styles.filmName}>{props.title}</Text>
          <Text style={styles.year}>{props.year}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  dataWrapper: {

    flexDirection: "row"
  },
  image: {
    height: 150,
    width: 150,
  },
  highlights: {
    flexShrink: 1,
    flexDirection: "column",
    marginLeft: 6,
    width: "40%"
  },
  filmName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  year: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2
  }
});
