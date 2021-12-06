import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Fetch from './screens/Fetch';
import HomeScreen from './screens/HomeScreen';
// import About from './screens/About';
import LoginScreen from './screens/LoginScreen';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function App() {

  
 return (
   <NavigationContainer>
     {/* <Drawer.Navigator initialRouteName="Login"> */}
     <Stack.Navigator >
       <Stack.Screen options= {{ headerShown: false }} name= "Login" component={LoginScreen}/>
       <Stack.Screen name= "Home" component={HomeScreen}/>
       {/* <Drawer.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="About" component={About} />
       <Drawer.Screen name="Fetch" component={Fetch} />
        */}
     </Stack.Navigator>
     {/* </Drawer.Navigator */}
   </NavigationContainer>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default App;