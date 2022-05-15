import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const CardMovies = ({ movie, width = 300, height = 380 }) => {

  const navegation = useNavigation()

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <TouchableOpacity
      onPress={() => navegation.navigate("Details", movie)}
      activeOpacity={0.88}
      style={{ 
          width, 
          height, 
          marginHorizontal: 5, 
      }}>
      <View style={styles.shadowProps} >
        <Image 
          source={{ uri }} 
          style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  shadowProps: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
