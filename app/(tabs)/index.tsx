import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {

const router=useRouter();


  
  return (
    <View style={styles.container}>
      {/* IMAGE SECTION */}
      <Image 
        source={require("../../assets/images/loginimg.png")} 
        style={styles.image} 
      />

      {/* TEXT SECTION */}
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>The best app for your needs 🚀</Text>

      {/* GET STARTED BUTTON */}
      <TouchableOpacity style={styles.button} 
       onPress={() => router.push('/auth/signUp')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>

      {/* ALREADY HAVE AN ACCOUNT */}
      <TouchableOpacity 
      onPress={() => router.push('/auth/signIn')}>
       <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Log in</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 300,  
    height: 250, 
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    color: "#666",
    marginTop: 15,
  },
  loginLink: {
    color: "#007AFF",
    fontWeight: "bold",
  }
});

 