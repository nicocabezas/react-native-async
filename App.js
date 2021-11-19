import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notificaciones</Text>
    </View>
  );
}



function App() {
 return (
   <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
     </Drawer.Navigator>
   </NavigationContainer>
 );
}






export default App;