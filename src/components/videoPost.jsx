import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import VideoPlayer from 'react-native-video';

const { width } = Dimensions.get('window');

const VideoPost = ({ videoSource }) => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        source={videoSource}
        style={styles.video}
        resizeMode="contain"
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    aspectRatio: 16 / 9, // Adjust the aspect ratio as needed
  },
  video: {
    width: 'auto',
    height: 'auto',
  },
});

export default VideoPost;
