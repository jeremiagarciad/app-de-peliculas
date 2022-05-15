import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ShowMovieDetails = ({ movieFull, castCrew }) => {

    return (
        <>
            {/* {Detalles} */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={20}
                    />
                    <Text style={{ fontSize: 16, color: 'black' }} >  {movieFull.vote_average} </Text>

                    <Text style={{ fontSize: 16, color: 'black' }}>
                        - {movieFull.genres.map(g => g.name).join(",   ")}
                    </Text>

                </View >

                <Text
                    style={{ fontSize: 16, color: 'black', marginTop: 10, fontWeight: 'bold' }}>
                    History
                </Text>
                <Text
                    style={{ fontSize: 15, color: 'black', marginBottom: 20 }}
                >{movieFull.overview}
                </Text>

                <Text
                    style={{ fontSize: 16, color: 'black', marginBottom: 5, fontWeight: 'bold' }}
                > Presupuesto
                </Text> 
                <Text>{movieFull.budget}</Text>
            </View>

            {/* {Casting} */}
            <View></View>
        </>
    )
}