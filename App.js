// App.js

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Not Defteri' }} />
        <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Not' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
