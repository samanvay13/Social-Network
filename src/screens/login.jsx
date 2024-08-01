import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Bradley-Hand': require('../assets/fonts/bradhitc.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient
            colors={['#4B0082', '#000']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.loginHeader}>
                <Text style={styles.loginHeaderText}>OMANTIX</Text>
            </View>
            <View style={styles.loginCard}>
                <Text style={styles.cardHeaderText}>Sign-In</Text>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="@ |"
                    placeholderTextColor="#aaa"
                />
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXXXXXXX"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Forgot Password?</Text>
                    <Text style={styles.footerText}>Sign Up</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <LinearGradient
                        colors={['#02d650', '#007812']}
                        style={styles.loginButton}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
    },
    loginHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
        paddingVertical: 30,
    },
    loginHeaderText: {
        fontFamily: 'Bradley-Hand',
        color: '#fff',
        fontSize: 60,
    },
    loginCard: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderRadius: 10,
        padding: 30,
    },
    cardHeaderText: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    inputLabel: {
        color:'#fff',
        alignSelf: 'flex-start',
        padding: 15,
        fontSize: 18,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#000',
    },
    loginButton: {
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    footerText: {
        color: '#ffffad',
        fontSize: 16,
    },
});

export default LoginScreen;
