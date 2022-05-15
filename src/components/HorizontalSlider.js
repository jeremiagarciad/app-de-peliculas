import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardMovies } from './CardMovies';

export const HorizontalSlider = ({ title, movie}) => {
  return (
   
    <View style={{
        // backgroundColor: 'red', 
        height: ( title ) ? 260 : 220
        
        }}>
        {
            title && <Text style={{
                fontWeight: 'bold', 
                fontSize: 20,
                marginBottom : 10,
                marginLeft: 20,
            
            }}
                
            >{title}</Text>
        }
          <FlatList
            data={movie}
            renderItem={({item}) => (
              <CardMovies movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

    </View>
  )
}