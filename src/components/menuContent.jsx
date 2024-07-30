import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';

const MenuContent = ({ onCloseMenu, isDarkMode, toggleTheme }) => {
  const [fontsLoaded] = useFonts({
    'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.menuContainer, isDarkMode && styles.darkMenuContainer]}>
      <View style={styles.menuHeader}>
        <Image
          source={require("../assets/avatars/sapiens12.png")}
          style={styles.avatarImage}
        />
        <TouchableOpacity onPress={onCloseMenu} style={styles.closeIcon}>
          <Ionicons name="close" size={24} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out-outline" size={24} color={isDarkMode ? "white" : "black"} />
          <Text style={[styles.menuItemText, isDarkMode && styles.darkMenuItemText]}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.themeToggle}>
          <Text style={[styles.themeToggleText, isDarkMode && styles.darkThemeToggleText]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  darkMenuContainer: {
    backgroundColor: '#000',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  closeIcon: {
    padding: 10,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  themeToggleText: {
    fontSize: 18,
  },
  darkThemeToggleText: {
    color: '#fff',
  },
});

export default MenuContent;
