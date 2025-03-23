import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !contactInfo || !location) {
      setErrorMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); 

    try {
      const response = await fetch('http://192.168.158.2:5000/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
          contactInfo: contactInfo,
          location: location,
        }),
      });

      const data = await response.json();

      if (response.ok) {
  
        router.push("/auth/otp"); 
      } else {
 
        setErrorMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      setErrorMessage("Network error, please try again later.");
      console.error("Signup Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/loginimg copy.png")} style={styles.logo} />
      <Text style={styles.title}>Create New Account</Text>

      {/* Input fields */}
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
      <TextInput
        style={styles.input}
        placeholder="Contact Info"
        keyboardType="phone-pad"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      {/* Error message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Submit button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Creating..." : "Create Account"}</Text>
      </TouchableOpacity>

      {/* Redirect to Sign In */}
      <TouchableOpacity onPress={() => router.push("/auth/signIn")}>
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
  },
  errorText: {
    color: "red",
    marginBottom: 15,
    fontSize: 14,
  },
});
