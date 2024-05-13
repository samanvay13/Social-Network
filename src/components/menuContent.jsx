import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuContent = ({ onCloseMenu }) => {
  const navigation = useNavigation();

  const navigateToMainCharacterFeed = () => {
    navigation.navigate('MainCharacterFeed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onCloseMenu}>
        <Ionicons name="close-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
        <Text style={styles.username}>@mr.diablo</Text>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigateToMainCharacterFeed}>
          <Ionicons name="finger-print-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Main Character Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Saved Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Ionicons name="log-out-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.settingsButton} onPress={() => {}}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 10,
    zIndex: 1,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  username: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold"
  },
  menuItems: {
    marginTop: 50,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  settingsButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  settingsButtonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default MenuContent;
