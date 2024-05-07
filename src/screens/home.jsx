import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsContainer}>
        <View style={styles.postsContainer}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}>
        <View style={styles.storiesContainer}>
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
          <View style={styles.story}></View>
          <View style={styles.story}></View>
          <View style={styles.story}></View>
          <View style={styles.story}></View>
          <View style={styles.story}></View>
        </View>
      </ScrollView>
          <View style={styles.post}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}></View>
              <Text style={styles.username}>mr.diablo</Text>
            </View>
            <View style={styles.postContent}></View>
            <View style={styles.actionButtons}>
              <View style={styles.leftActions}>
                <Ionicons name="flame-outline" size={24} color="black" />
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Ionicons name="share-social-outline" size={24} color="black" />
              </View>
              <View style={styles.rightActions}>
                <Ionicons name="bookmark-outline" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}></View>
              <Text style={styles.username}>mr.diablo</Text>
            </View>
            <View style={styles.postContent}></View>
            <View style={styles.actionButtons}>
              <View style={styles.leftActions}>
                <Ionicons name="flame-outline" size={24} color="black" />
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Ionicons name="share-social-outline" size={24} color="black" />
              </View>
              <View style={styles.rightActions}>
                <Ionicons name="bookmark-outline" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}></View>
              <Text style={styles.username}>mr.diablo</Text>
            </View>
            <View style={styles.postContent}></View>
            <View style={styles.actionButtons}>
              <View style={styles.leftActions}>
                <Ionicons name="flame-outline" size={24} color="black" style={styles.leftActionButton} />
                <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.leftActionButton} />
                <Ionicons name="share-social-outline" size={24} color="black" style={styles.leftActionButton} />
              </View>
              <View style={styles.rightActions}>
                <Ionicons name="bookmark-outline" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
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
    flexDirection: 'row',
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
  postsContainer: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  post: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'aliceblue',
    marginHorizontal: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postContent: {
    height: 400, // Adjust height as needed
    backgroundColor: 'aliceblue',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  leftActionButton: {
    marginHorizontal: 100,
  },
  rightActions: {},
});

export default HomeScreen;
