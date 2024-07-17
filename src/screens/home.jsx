import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Platform, TouchableOpacity, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import MenuContent from '../components/menuContent';

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  if (!fontsLoaded) {
    return null;
  }

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
              <Text style={styles.headerTitle}>OMANTIX</Text>
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
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.myAvatarImage} />
                <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
                </View>
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
              <View style={styles.story}>
                <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.avatarImage} />
              </View>
            </View>
          </ScrollView>
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={styles.username}>BruceWayne</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={styles.captionText}>A Hero Can Be Anyone...</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/1.jpg')} style={styles.postImage} />
                </View>
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
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={styles.username}>WalterWhite</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={styles.captionText}>If you don't know who I am, then maybe your best course would be to tread lightly.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/2.jpeg')} style={styles.postImage} />
                </View>
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
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={styles.username}>HarveySpecter</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={styles.captionText}>Sometimes good guys gotta do bad things to make the bad guys pay.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/3.jpg')} style={styles.postImage} />
                </View>
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
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={styles.username}>SatoruuuGojooo</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={styles.captionText}>Love is the most twisted curse of all.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/4.jpg')} style={styles.postImage} />
                </View>
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
            <View style={styles.post}>
              <View style={styles.userInfo}>
                <View style={styles.leftInfo}>
                  <View style={styles.avatar}>
                    <Image source={require('../assets/avatars/mr.diablo.png')} style={styles.postAvatarImage} />
                  </View>
                  <Text style={styles.username}>JohnWick</Text>
                </View>
                <View style={styles.rightInfo}>
                  <Ionicons name="ellipsis-vertical-outline" size={24} color="black"/>
                </View>
              </View>
              <View style={styles.caption}>
                <Text style={styles.captionText}>Si Vis Pacem, Para Bellum.</Text>
              </View>
              <View style={styles.postContent}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/flexfeed/images/7.jpg')} style={styles.postImage} />
                </View>
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
    paddingTop: 45,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
  headerTitle: {
    fontFamily: 'Bradley-Hand',
    fontSize: 35,
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
    paddingVertical: 10,
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
    right: 25,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    width: 20,
    height: 20,
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
    borderTopColor: '#ccc',
    borderTopWidth: 0.2
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  postAvatarImage: {
    width: 40,
    height: 40,
  },
  username: {
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
  caption: {
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  captionText: {
    fontSize: 16,
  }
});

export default HomeScreen;
