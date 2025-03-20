import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { useRouter } from "expo-router";
import { 
  View, Text, TextInput, Image, StyleSheet, TouchableOpacity 
} from "react-native";
import { UserDetailContext } from "../context/UserDetailContext"; 

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserDetail } = useContext(UserDetailContext); 

  const CreateNewAccount = async () => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      const user = resp.user;
      console.log(user);
      await SaveUser(user);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const SaveUser = async (user) => {
    const data = {
      name: fullName,
      email: email,
      member: false,
      uid: user?.uid,
    };

    await setDoc(doc(db, "users", email), data);

    setUserDetail(data); 
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/loginimg copy.png")} style={styles.logo} />
      <Text style={styles.title}>Create New Account</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Full Name" 
        value={fullName} 
        onChangeText={setFullName} 
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

      <TouchableOpacity style={styles.button} onPress={CreateNewAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/signIn')}>
        <Text style={styles.registerText}>
          Already have an account? <Text style={styles.registerLink}>Sign in Here</Text>
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
