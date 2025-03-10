import { useRouter, useNavigation } from "expo-router";
import React, { useState } from "react";
import { 
  View, Text, TextInput, Image, StyleSheet, TouchableOpacity
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';

export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({ headerShown: false });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/loginimg.png")} 
        style={styles.logo} 
      />

      <Text style={styles.title}>Create New Account</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Full Name" 
        value={name} 
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
        value={email} 
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/signIn')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>SignIn</Text>
        </Text>
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
  logo: {
    width: 100,  
    height: 100, 
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
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
