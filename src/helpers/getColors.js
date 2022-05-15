// react-native-image-colors. paquete para obtener el color de una imagen y poner de fondo

import ImageColors from "react-native-image-colors";


export const getImageColors = async (uri) => {

    const colors = await ImageColors.getColors(uri, {})

    let primary;
    let secondary;;

    if (colors.platform === "android") {

        primary = colors.dominant
        secondary = colors.average

    } else {
        primary = colors.primary
        secondary = colors.secondary
    }

    return [primary, secondary]


}