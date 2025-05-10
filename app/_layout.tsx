import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* Main Tabs */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />

      {/* Service Details Page */}
      <Stack.Screen 
        name="services/[id]" 
        options={{ headerShown: false }} 
      />

      {/* Authentication Screens */}
      <Stack.Screen 
        name="auth/signUp"  
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="auth/otp"  // OTP page
        options={{ headerShown: false }} 
      />

      {/* Index/Home Page */}
      <Stack.Screen 
        name="index"  
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
