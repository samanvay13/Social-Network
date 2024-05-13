import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Platform, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuContent from '../components/menuContent';
import VideoPost from '../components/videoPost';

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.menu, { transform: [{ translateX: menuTranslateX }] }]}>
        <MenuContent onCloseMenu={toggleMenu} />
      </Animated.View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsContainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={toggleMenu}
              >
                <Ionicons name="menu-outline" size={30} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Omantix</Text>
              <TouchableOpacity
                style={{ paddingRight: 10 }}
                onPress={() => {}}
              >
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
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
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}></View>
                  <Text style={styles.username}>mr.diablo</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.postContent}>
                <Image></Image>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                <Ionicons name="flame-outline" size={24} color="black" style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color="black" style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      <View style={styles.bottomNavigationBar}>
        <TouchableOpacity>
          <Ionicons name="planet-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="compass-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="game-controller-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    paddingVertical: 20,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  headerTitle: {
    fontSize: 25,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#fff',
    zIndex: 1,
    borderRightWidth: 0,
    borderRightColor: '#ccc',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 0,
  },
  storiesContainer: {
    paddingVertical: 5,
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
    marginVertical: 20,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
    height: "auto",
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
    marginRight: 20,
  },
  rightActions: {},
  bottomNavigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderTopColor: '#ccc',
    paddingVertical: 20,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
});

export default HomeScreen;
