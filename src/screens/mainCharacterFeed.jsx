import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MainCharacterFeed = () => {
  const navigation = useNavigation();

  const closeMainCharacterFeed = () => {
    navigation.navigate('Home');
  }
  return (
    <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.postsContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <Text style={styles.username}>Samanvaya Tripathi</Text>
        </View>
        <TouchableOpacity style={styles.exitButton} onPress={closeMainCharacterFeed}>
          <Ionicons name="exit-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionLeft}>
          <Text style={styles.sectionTitle}>What would my Epitaph read?</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"Beautiful & Damned"</Text>
          </View>
        </View>
        <View style={styles.sectionRight}>
          <View style={styles.profilePictureContainer}>
            <Image source={require('../assets/profile pictures/samanvay.jpg')} style={styles.profilePicture} />
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="settings-outline" size={20} color="black" />
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.memoriesContainer}>
      <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/me.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Me</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/family.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Family</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/friends.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Friends</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/travel.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Travel</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/sports.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Sports</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/city.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>City</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <Image source={require('../assets/images/nightlife.png')} style={styles.memoryImage} />
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Night Life</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.addMemory}>
            <View style={styles.addMemoryPlusIcon}>
              <Ionicons name="add-outline" size={30} color="black" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Add New</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    ...Platform.select({
      android: {
        elevation: 3,
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
  },
  exitButton: {
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionLeft: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quoteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingVertical: 40,
    borderRadius: 5,
  },
  quoteText: {
    fontSize: 20,
  },
  sectionRight: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,

  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
  addMemory: {
    paddingHorizontal: 30,
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
    aspectRatio: 1, // To make it square
    backgroundColor: 'aliceblue',
    marginLeft: 1,
    marginBottom: 1,
    borderRadius: 10,
  },
});

export default MainCharacterFeed;
