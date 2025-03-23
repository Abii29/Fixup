import React, { useState, useRef } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return; // Ensure only one digit per input
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input box if digit is entered
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Auto-submit when 4 digits are entered
    if (newOtp.join("").length === 4) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleVerify = (enteredOtp) => {
    console.log("Entered OTP:", enteredOtp);
    // Navigate to the next screen after successful OTP entry
    router.push("/home"); // Change this route as per your app structure
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/loginimg copy.png")} style={styles.logo} />
      <Text style={styles.title}>Verify Your Account</Text>
      <Text style={styles.subtitle}>Enter the 4-digit OTP sent to your phone</Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleVerify(otp.join(""))}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Resend OTP")}>
        <Text style={styles.registerText}>
          Didn't receive a code? <Text style={styles.registerLink}>Resend OTP</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderColor: "#007AFF",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
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
});

