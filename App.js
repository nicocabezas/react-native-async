import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Fetch from './screens/Fetch';
import HomeScreen from './screens/Home';

const Drawer = createDrawerNavigator();
HomeScreen();

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
    </View>
  );
}




function App() {
 return (
   <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="About" component={AboutScreen} />
       <Drawer.Screen name="Fetch" component={Fetch} />
     </Drawer.Navigator>
   </NavigationContainer>
 );
}






export default App;