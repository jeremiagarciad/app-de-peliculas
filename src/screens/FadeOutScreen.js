import React, { useRef } from 'react';
import { View, StyleSheet, Text, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeoutScreen = () => {

    const  {fadeOut, fadeIn, opacity } = useFade()
    return (
        <View style={styles.ContainerFadeoutScreen}>

            <Animated.View
                style={{
                    ...styles.contentContainer,
                    opacity,
                }}>

                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>

            <Button title="FadeIn" onPress={fadeIn} />
            <Button title="FadeOut" onPress={fadeOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    ContainerFadeoutScreen: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",

    },
    contentContainer: {
        backgroundColor: "#084f6a",
        alignItems: "center",
        justifyContent: "center",
        width: 220,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
        // borderColor: "white",
        // borderWidth: 10,
    },
    fadingText: {
        fontSize: 28,
        color: "white",
    },
})


