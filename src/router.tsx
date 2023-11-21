import { Home } from '@/screens/Home';
import Jobs from '@/screens/Jobs';
import Onboarding from '@/screens/Onboarding';
import Profile from '@/screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import TaskDetails from './screens/TaskDetails';

const Router = () => {
  const Stack = createNativeStackNavigator();
  const [isOnboarded, setIsOnboarded] = useState('');

  useEffect(() => {
    const fetchOnboardedStatus = async () => {
      const onboarded = await AsyncStorage.getItem('@userOnboarded');
      setIsOnboarded(onboarded);
    };

    fetchOnboardedStatus();
  }, []);

  if (isOnboarded === '') {
    return null; // or any loading indicator/component if needed
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isOnboarded === 'true' ? 'Home' : 'Onboarding'}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Jobs" component={Jobs} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Router