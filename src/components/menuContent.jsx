import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const MenuContent = ({ onCloseMenu, isDarkMode, toggleTheme }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#4B0082', '#150024']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.menuContainer]}
    >
      <View style={styles.menuHeader}>
        <TouchableOpacity onPress={onCloseMenu} style={styles.closeIcon}>
          <Ionicons name="close" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../assets/avatars/sapiens12.png")} style={styles.avatarImage}/>
        <Text style={styles.darkUsername}>@ mr.diablo</Text>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile', { isDarkMode })}>
          <Ionicons name="person-outline" size={24} color={"white"} />
          <Text style={styles.darkMenuItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}  onPress={() => navigation.navigate('SecurityPinScreen', { isDarkMode })}>
          <Ionicons name="lock-closed-outline" size={24} color={"white"} />
          <Text style={styles.darkMenuItemText}>Main Character Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color={"white"} />
          <Text style={styles.darkMenuItemText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.themeToggle}>
          <Text style={styles.darkThemeToggleText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Ionicons name="log-out-outline" size={24} color={"#D22B2B"} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  darkMenuContainer: {
    backgroundColor: '#000',
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
    paddingTop: 20,
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
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
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
    fontSize: 18,
    marginLeft: 15,
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
    fontSize: 18,
    marginRight: 10,
    color: '#fff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 0,
  },
  logoutText: {
    color: "#D22B2B",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MenuContent;
