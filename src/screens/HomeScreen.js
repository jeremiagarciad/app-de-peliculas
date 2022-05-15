
// Importaciones de react and react-native
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';

// Mis Importaciones...
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';
import { CardMovies } from './../components/CardMovies';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { now_playing, isLoading, popular, topRated, upcoming } = useMovies();

  const { top } = useSafeAreaInsets();
  const {setMainColors} = useContext( GradientContext);

  const getPosterColors = async ( index ) => {

    try {
      const movie = now_playing[index]
      const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      
      const [primary = "green", secondary = "red"] =  await getImageColors(uri)

      setMainColors({ primary, secondary });

    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    if(now_playing.length > 0)
    getPosterColors(0)
  }, [now_playing])




  if (isLoading) {
    return (
      <View
        color
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="orange" size={40} />
      </View>
    );
  }
 
  return (

    <GradientBackground >

      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* { Carrusel principal } */}
          <View
            style={{
              height: 400,
            }}>
            <Carousel
              data={now_playing}
              renderItem={({ item }) => <CardMovies movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors( index)}
            />
          </View>

          <HorizontalSlider title="Populares" movie={popular} />
          <HorizontalSlider title="Mas vistas" movie={topRated} />
          <HorizontalSlider title="Proximamente" movie={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
