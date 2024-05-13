import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MainCharacterFeed = () => {
  const navigation = useNavigation();

  const closeMainCharacterFeed = () => {
    navigation.navigate('Home');
  }
  return (
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
          <Text style={styles.sectionTitle}>What would my epitaph read?</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"Beautiful & Damned"</Text>
          </View>
        </View>
        <View style={styles.sectionRight}>
          <View style={styles.profilePicture}></View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create-outline" size={20} color="black" />
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.memoriesContainer}>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Me</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Family</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Friends</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Travel</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Sports</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>City</Text>
        </View>
        <View style={styles.memory}>
          <View style={styles.memoryCircle}>
            <View style={styles.plusIcon}>
                <Ionicons name="add-outline" size={16} color="white" />
            </View>
          </View>
          <Text style={styles.memoryTitle}>Night Life</Text>
        </View>
      </ScrollView>

      <View style={styles.photoGrid}>
        {/* Photo 1 */}
        <View style={styles.photo}></View>
        {/* Add more photos as needed */}
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
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'aliceblue',
    marginBottom: 10,
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
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
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
    fontSize: 14,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  photo: {
    width: '30%',
    aspectRatio: 1, // To make it square
    backgroundColor: 'aliceblue',
    marginBottom: 10,
  },
});

export default MainCharacterFeed;
