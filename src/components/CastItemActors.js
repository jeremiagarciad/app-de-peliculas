import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const CastItemActors = ({ actor }) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.castContainer}>
            {/* if actor character exists play it, if not return nothing */}
            { 
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={styles.imageProfilePath}
                    />
                )
            }
            <View>
                <Text style={styles.actorName}>{actor.name}</Text>
                <Text style={styles.actorCharacter}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    castContainer: {
        flexDirection: "row",
        width: 290,
        borderRadius: 6,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 2,
        marginTop: 5,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    imageProfilePath: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    actorCharacter: {
        fontSize: 16,
        opacity: 0.7
    }
})