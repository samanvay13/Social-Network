import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const route = useRoute();
  const { isDarkMode } = route.params;
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
  });

  const closeProfileScreen = () => {
    navigation.navigate('Home');
  }

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsContainer}>
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <LinearGradient
          colors={['#4B0082', '#260142']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.leftSection}>
            <TouchableOpacity style={styles.exitButton} onPress={closeProfileScreen}>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.username}>@ mr.diablo</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={22} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.section}>
          <View style={styles.profilePictureContainer}>
          <Image source={require('../assets/avatars/sapiens12.png')} style={styles.profilePicture} />
          </View>
          <ImageBackground source={require('../assets/other/blackstone.png')} style={styles.quoteBox}>
          <Text style={styles.quoteText}>"All Things Relative"</Text>
          </ImageBackground>
        </View>

        <View style={styles.profileInfo}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#8A2BE2', '#4B0082']}
              style={styles.followButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.followButtonText}>+ Follow</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.info}>
            <Text style={[styles.infoText, isDarkMode && styles.darkInfoText]}>5k</Text>
            <Text style={[styles.infoLabel, isDarkMode && styles.darkInfoLabel]}>Lit Count</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.infoText, isDarkMode && styles.darkInfoText]}>18</Text>
            <Text style={[styles.infoLabel, isDarkMode && styles.darkInfoLabel]}>Communities</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.memoriesContainer}>
        <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/gaming.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Gaming</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/music.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Music</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/movies.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Movies</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/travel.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Travel</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/sports.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Sports</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/city.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>City</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.memoryCircle}>
              <Image source={require('../assets/images/nightlife.png')} style={styles.memoryImage} />
              <View style={styles.plusIcon}>
                  <Ionicons name="add-outline" size={16} color="white" />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Night Life</Text>
          </View>
          <View style={styles.memory}>
            <View style={styles.addMemory}>
              <View style={styles.addMemoryPlusIcon}>
                <Ionicons name="add-outline" size={30} color={isDarkMode ? "white" : "black"} />
              </View>
            </View>
            <Text style={[styles.memoryTitle, isDarkMode && styles.darkMemoryTitle]}>Add New</Text>
          </View>
        </ScrollView>
        <View style={styles.photoGrid}>
          <Image source={require('../assets/images/image1.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image2.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image3.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image4.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image5.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image6.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image7.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image8.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image9.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image10.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image11.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image12.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image13.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image2.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image3.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image4.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image5.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image6.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image7.png')} style={styles.photo}></Image>
          <Image source={require('../assets/images/image8.png')} style={styles.photo}></Image>
        </View>
      </View>
    </ScrollView>
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
    paddingTop: 45,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'center',
  },
  quoteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingVertical: 40,
    paddingHorizontal: 40,
    marginRight: 25,
    borderRadius: 20,
    overflow: 'hidden',
  },
  quoteText: {
    fontFamily: 'Bradley-Hand',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePictureContainer: {
    width: 150,
    height: 150,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 180,
    height: 180,
  },
  memoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  memory: {
    marginRight: 10,
    alignItems: 'center',
  },
  memoryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  memoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
  memoryTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  darkMemoryTitle: {
    color: '#fff',
  },
  addMemory: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addMemoryPlusIcon: {

  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 1,
    paddingTop: 20,
  },
  photo: {
    width: '33%',
    aspectRatio: 1,
    backgroundColor: 'aliceblue',
    marginLeft: 1,
    marginBottom: 1,
    borderRadius: 10,
  },
  profileInfo: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontFamily: 'Bradley-Hand',
    fontSize: 32,
  },
  darkInfoText: {
    color: '#fff',
  },
  infoLabel: {
    fontSize: 15,
  },
  darkInfoLabel: {
    color: '#fff',
  },
  followButton: {
    width: 130,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  followButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
