import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import axios from 'axios';
import { alienList } from './store/alienList';
import AlienList from './screens/AlienList';
import Home from './screens/Home';
import 'expo-dev-client';
import AlienSelector from './screens/AlienSelector';

const Stack = createStackNavigator();

export default function App() {
  const { setAliens } = alienList();

  useEffect(() => {
    const getAliens = async () => {
      try {
        const response = await axios.get('https://us-central1-cosmicappback.cloudfunctions.net/app/api/aliens/aliens');
        const aliensData = response.data;
        setAliens(aliensData);
      } catch (error) {
        console.log(error);
      }
    };

    getAliens();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Home' }} component={Home}/>
        <Stack.Screen name="Aliens" component={AlienList} />
        <Stack.Screen name="Selección de Alien" component={AlienSelector}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
