import React from 'react';
import { 
View, 
Text, 
Image, 
StyleSheet, 
Dimensions, 
ScrollView, 
ActivityIndicator, 
TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ShowMovieDetails } from '../components/ShowMovieDetails';
import { useMoviesDetails } from './../hooks/useMoviesDetails';

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation }) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const { isLoading, cast, movieCompleted } = useMoviesDetails(movie.id)

  console.log(movieCompleted)

  // console.log({movie})
  // console.log(movie.title)

  return (

    <ScrollView>
      <View style={styles.containerDetails}>

        <Image
          style={styles.imagePoster_Path}
          source={{ uri }}
        />
      </View>
      <View style={styles.containerDescriptMovie}>
        <Text style={styles.fontTitle} >{movie.original_title}</Text>
        <Text style={{
          ...styles.fontSubtitle,
          color: "black"

        }} >{movie.title}</Text>
        {/* <Text>{movie.overview}</Text> */}
      </View>

      {
        isLoading
          ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
          : <ShowMovieDetails movieFull={movieCompleted} castCrew={cast} />
      }
      {/* Boton para cerrar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        opacity={0.2}
      >
        <Icon
          color="white"
          name="arrow-back-outline"
          size={40}

        />
      </TouchableOpacity>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containerDetails: {
    width: "100%",
    height: screenHeight * 0.60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.26,
    shadowRadius: 7,

    elevation: 9,
  },
  imagePoster_Path: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  containerDescriptMovie: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  fontTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  fontSubtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {

    position: 'absolute',
    top: 5,
    left: 5,
    // backgroundColor: "#292929",
    borderRadius: 50,
    padding: 3,
  }
})