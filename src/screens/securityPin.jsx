import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SecurityPinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handlePinInput = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleResetPin = () => {
    setPin('');
  };

  const handleVerifyPin = () => {
    if (pin === '1234') {
      navigation.navigate('MainCharacterFeed');
    } else {
      alert('Incorrect PIN');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Enter 4-digit PIN to proceed</Text>
      </View>
      <View style={styles.pinContainer}>
        {Array(4).fill().map((_, index) => (
          <View key={index} style={styles.pinBlock}>
            <Text style={styles.pinText}>{pin[index] || ''}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPin}>
        <Text style={styles.verifyButtonText}>Verify PIN</Text>
      </TouchableOpacity>
      <View style={styles.numericButtonsContainer}>
        <View style={styles.numericRow}>
          <NumericButton digit={1} onPress={() => handlePinInput(1)} />
          <NumericButton digit={2} onPress={() => handlePinInput(2)} />
          <NumericButton digit={3} onPress={() => handlePinInput(3)} />
        </View>
        <View style={styles.numericRow}>
          <NumericButton digit={4} onPress={() => handlePinInput(4)} />
          <NumericButton digit={5} onPress={() => handlePinInput(5)} />
          <NumericButton digit={6} onPress={() => handlePinInput(6)} />
        </View>
        <View style={styles.numericRow}>
          <NumericButton digit={7} onPress={() => handlePinInput(7)} />
          <NumericButton digit={8} onPress={() => handlePinInput(8)} />
          <NumericButton digit={9} onPress={() => handlePinInput(9)} />
        </View>
        <View style={styles.numericRow}>
          <TouchableOpacity style={styles.numericButton} onPress={handleResetPin}>
            <Ionicons name="reload-outline" size={24} color="black" />
          </TouchableOpacity>
          <NumericButton digit={0} onPress={() => handlePinInput(0)} />
          <TouchableOpacity style={styles.numericButton} onPress={handleBackspace}>
            <Ionicons name="backspace-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const NumericButton = ({ digit, onPress }) => (
  <TouchableOpacity style={styles.numericButton} onPress={onPress}>
    <Text style={styles.numericButtonText}>{digit}</Text>
  </TouchableOpacity>
);

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
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
  title: {
    fontSize: 24,
  },
  description: {
    alignSelf: 'center',
    paddingVertical: 50,
  },
  descriptionText: {
    fontSize: 20,
  },
  pinContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 60,
    alignSelf: 'center',
  },
  pinBlock: {
    width: 70,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {
    fontSize: 36,
  },
  verifyButton: {
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  numericButtonsContainer: {
    paddingHorizontal: 20,
  },
  numericRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  numericButton: {
    backgroundColor: '#ccc',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numericButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecurityPinScreen;
