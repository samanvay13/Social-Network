import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home";
import MainCharacterFeed from "./src/screens/mainCharacterFeed";
import SecurityPinScreen from "./src/screens/securityPin";
import LoginScreen from "./src/screens/login";
import ProfileScreen from "./src/screens/profile";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="SecurityPinScreen" component={SecurityPinScreen} options={{headerShown: false}} />
        <Stack.Screen name="MainCharacterFeed" component={MainCharacterFeed} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
