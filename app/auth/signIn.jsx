import { useRouter } from "expo-router";
import React, { useState } from "react";
import { 
  View, Text, TextInput, Image, StyleSheet, TouchableOpacity 
} from "react-native";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image 
        source={require("../../assets/images/loginimg.png")} 
        style={styles.logo} 
      />

      {/* TITLE */}
      <Text style={styles.title}>Welcome Back</Text>

      {/* INPUT FIELDS */}
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

      {/* SIGN IN BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* DON'T HAVE AN ACCOUNT? */}
      <TouchableOpacity onPress={() => router.push('/auth/signUp')}>
        <Text style={styles.registerText}>
          Don't have an account? <Text style={styles.registerLink}>Create New Account</Text>
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
  registerText: {
    fontSize: 16,
    color: "#666",
    marginTop: 15,
  },
  registerLink: {
    color: "#007AFF",
    fontWeight: "bold",
  }
});
