import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";

const MenuContent = ({ onCloseMenu, isDarkMode, toggleTheme }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.menuContainer, isDarkMode && styles.darkMenuContainer]}>
      <View style={styles.menuHeader}>
        <TouchableOpacity onPress={onCloseMenu} style={styles.closeIcon}>
          <Ionicons name="close" size={24} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../assets/avatars/sapiens12.png")} style={styles.avatarImage}/>
        <Text style={[styles.username, isDarkMode && styles.darkUsername]}>@ mr.diablo</Text>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}  onPress={() => navigation.navigate('SecurityPinScreen')}>
          <Ionicons name="lock-closed-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Main Character Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.themeToggle}>
          <Text style={[styles.themeToggleText, isDarkMode && styles.darkThemeToggleText]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Ionicons name="log-out-outline" size={24} color={isDarkMode ? "white" : "black"} />
        <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  darkMenuContainer: {
    backgroundColor: '#000',
    adding: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatarImage: {
    width: 300,
    height: 300,
  },
  closeIcon: {
    padding: 10,
  },
  username: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: "bold",
  },
  darkUsername: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  menuItems: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 15,
  },
  darkMenuItemText: {
    color: '#fff',
  },
  themeToggle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  themeToggleText: {
    fontSize: 18,
    marginRight: 10,
  },
  darkThemeToggleText: {
    color: '#fff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 0,
  }
});

export default MenuContent;
