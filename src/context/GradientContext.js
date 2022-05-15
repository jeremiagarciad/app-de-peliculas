import React, { createContext, useState } from 'react';


export const GradientContext = createContext({}) 


export const GradientProvider = ({ children }) => {

    const [colors, setColors] = useState({
        primary: "transparent",
        secondary: "transparent"
    });

    const [prevColors, setPrevColors] = useState({
        primary: "transparent",
        secondary: "transparent"
    });

    const setMainColors = (colors) => {
        setColors(colors)
    }

    const setPrevMainColors = (colors) => {
        setPrevColors(colors)
    }


    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }} >
            {children}
        </GradientContext.Provider >
    )
}
