import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Platform, TouchableOpacity, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import MenuContent from '../components/menuContent';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = useFonts({
    'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
  });

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Animated.View style={[styles.menu, { transform: [{ translateX: menuTranslateX }] }]}>
        <MenuContent onCloseMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </Animated.View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsContainer}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#4B0082', '#260142']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.darkHeader]}
          >
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={toggleMenu}
            >
              <Image source={require('../assets/avatars/sapiens12.png')} style={styles.headerAvatarImage} />
              <View style={styles.plusIcon}>
                <Ionicons name="chevron-forward-outline" size={10} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={[styles.darkHeaderTitle]}>OMANTIX</Text>
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {}}
            >
              <Ionicons
                name="chatbubbles-outline"
                size={27}
                color={"white"}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.postsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesContainer}>
            <View style={styles.storiesContainer}>
            <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens1.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens2.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens3.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens4.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens5.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens6.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens7.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens8.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens9.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens10.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens11.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/sapiens12.png')} style={styles.avatarImage} />
              </View>
            </View>
          </ScrollView>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/sapiens10.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={[styles.username, isDarkMode && styles.darkUsername]}>BruceWayne</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color={isDarkMode ? "white" : "black"}/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={[styles.captionText, isDarkMode && styles.darkCaptionText]}>A Hero Can Be Anyone...</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/1.jpg')} style={styles.postImage} />
                </View>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                  <Ionicons name="flame-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/sapiens12.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={[styles.username, isDarkMode && styles.darkUsername]}>WalterWhite</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color={isDarkMode ? "white" : "black"}/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={[styles.captionText, isDarkMode && styles.darkCaptionText]}>If you don't know who I am, then maybe your best course would be to tread lightly.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/2.jpeg')} style={styles.postImage} />
                </View>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                  <Ionicons name="flame-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/sapiens9.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={[styles.username, isDarkMode && styles.darkUsername]}>HarveySpecter</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color={isDarkMode ? "white" : "black"}/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={[styles.captionText, isDarkMode && styles.darkCaptionText]}>Sometimes good guys gotta do bad things to make the bad guys pay.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/3.jpg')} style={styles.postImage} />
                </View>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                  <Ionicons name="flame-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/sapiens8.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={[styles.username, isDarkMode && styles.darkUsername]}>SatoruuuGojooo</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color={isDarkMode ? "white" : "black"}/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={[styles.captionText, isDarkMode && styles.darkCaptionText]}>Love is the most twisted curse of all.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/4.jpg')} style={styles.postImage} />
                </View>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                  <Ionicons name="flame-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/sapiens7.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={[styles.username, isDarkMode && styles.darkUsername]}>JohnWick</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color={isDarkMode ? "white" : "black"}/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={[styles.captionText, isDarkMode && styles.darkCaptionText]}>Si Vis Pacem, Para Bellum.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/7.jpg')} style={styles.postImage} />
                </View>
              </View>
              <View style={styles.actionButtons}>
                <View style={styles.leftActions}>
                  <Ionicons name="flame-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                  <Ionicons name="arrow-redo-outline" size={24} color={isDarkMode ? "white" : "black"} style={styles.leftActionButton} />
                </View>
                <View style={styles.rightActions}>
                  <Ionicons name="bookmark-outline" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      <View style={[styles.bottomNavigationBar, isDarkMode && styles.darkBottomNavigationBar]}>
        <TouchableOpacity>
          <Ionicons name="planet-outline" size={30} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="compass-outline" size={30} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="game-controller-outline" size={40} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={30} color={isDarkMode ? "white" : "black"} />
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
  darkContainer: {
    backgroundColor: '#101010',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
  darkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#4A1985',
  },
  headerAvatarImage: {
    height: 70,
    width: 35,
  },
  headerTitle: {
    fontFamily: 'Bradley-Hand',
    fontSize: 35,
  },
  darkHeaderTitle: {
    fontFamily: 'Bradley-Hand',
    fontSize: 35,
    color: '#fff',
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
    ...Platform.select({
      android: {
        elevation: 500,
      },
    }),
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  myStory: {
    width: 120,
    height: 150,
    borderRadius: 40,
    marginRight: 10,
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: -2,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    width: 12.5,
    height: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  story: {
    width: 120,
    height: 150,
    borderRadius: 40,
    marginRight: 10,
    overflow: 'hidden',
  },
  myAvatarImage: {
    width: 120,
    height: 150,
  },
  avatarImage: {
    width: 120,
    height: 150,
  },
  postsContainer: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  post: {
    paddingVertical: 20,
    paddingBottom: 30,
    borderTopColor: '#aaa',
    borderTopWidth: 0.2,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  postAvatarImage: {
    width: 45,
    height: 45,
  },
  username: {
    color: "#000",
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkUsername: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  postContent: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftActions: {
    flexDirection: 'row',
  },
  litIcon: {
    height: 23,
    width: 23,
    marginRight: 20,
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
    borderTopColor: '#ccc',
    paddingVertical: 10,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
  darkBottomNavigationBar: {
    backgroundColor: '#070707',
    borderTopColor: '#333',
  },
  caption: {
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  captionText: {
    fontSize: 16,
    color: '#000',
  },
  darkCaptionText: {
    color: '#fff',
  },
});

export default HomeScreen;
