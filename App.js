import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Omantix",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                // Handle menu icon press
                // For example, you can navigate to a menu screen
              }}
            >
              <Ionicons name="menu-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {
                // Handle message icon press
                // For example, you can navigate to a messages screen
              }}
            >
              <Ionicons name="paper-plane-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Omantix" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
