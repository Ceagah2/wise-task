import Router from '@/router';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });
  return (
    <>
      {fontsLoaded ? <Router /> : <ActivityIndicator />}
    </>
  );
}