import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        {/* Your horizontally scrollable stories components go here */}
        <View style={styles.myStory}>
          <View style={styles.plusIcon}>
            <Ionicons name="add-outline" size={16} color="white" />
          </View>
        </View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        <View style={styles.story}></View>
        {/* Add more stories as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storiesContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  myStory: {
    width: 80,
    height: 80,
    backgroundColor: 'aliceblue',
    borderRadius: 40,
    marginRight: 10,
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story: {
    width: 80,
    height: 80,
    backgroundColor: 'aliceblue',
    borderRadius: 40,
    marginRight: 10,
  },
});

export default HomeScreen;
