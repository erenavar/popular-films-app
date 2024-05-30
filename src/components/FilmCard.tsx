import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import AntDesign from "@expo/vector-icons/AntDesign";
import moment from "moment";


interface Props {
  title: string;
  img: string;
  year: string;
}

export default function FilmCard(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <ImageBackground
          style={styles.image}
          source={{ uri: "https://image.tmdb.org/t/p/w500/" + props.img }}
        >
          {/* 
          <Image
            source={require("../../assets/images/1.png")}
            style={{ height: 150, width: 100 }}
          /> */}
          <View style={styles.overlayImage}>
            <AntDesign name="play" color={"white"} size={40} />
          </View>


        </ImageBackground>
        <View style={styles.highlights}>
          <Text numberOfLines={4} style={styles.filmName}>{props.title}</Text>
          <Text style={styles.year}>{moment(props.year).format("YYYY")} </Text>
        </View>
        <FontAwesome5 style={{ marginLeft: "15%" }} name="angle-right" size={24} color="gray" />
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
    width: 130,
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
  },
  overlayImage: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: "10%",
    paddingLeft: "10%",


  }
});
