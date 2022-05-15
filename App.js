import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeoutScreen } from './src/screens/FadeOutScreen';
import { GradientProvider } from './src/context/GradientContext';




const AppState = ({ children }) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeoutScreen/> */}
    </NavigationContainer>
  )
}

export default App;