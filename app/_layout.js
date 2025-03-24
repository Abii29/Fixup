import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { withTranslation } from "react-i18next";
import { LogBox, AppState, StatusBar } from "react-native";
import { Stack, useSegments } from "expo-router";
import i18n from "../languages/index"; //don't remove this line
import { useEffect } from "react";

LogBox.ignoreAllLogs();

const MainNavigation = () => {
  const segments = useSegments();

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });

    return () => {
      subscription.remove();
    };
  }, [segments]);

  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding/onboardingScreen" options={{ gestureEnabled: false }} />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
      <Stack.Screen name="bestOffer/bestOfferScreen" />
      <Stack.Screen name="topServices/topServicesScreen" />
      <Stack.Screen name="category/categoryScreen" />
      <Stack.Screen name="details/detailsScreen" />
      <Stack.Screen name="confirm/confirmScreen" />
      <Stack.Screen name="paymentMethod/paymentMethodScreen" />
      <Stack.Screen name="success/successScreen" options={{ gestureEnabled: false }} />
      <Stack.Screen name="editProfile/editProfileScreen" />
      <Stack.Screen name="booking/bookingScreen" />
    </Stack>
  );
};

const ReloadAppOnLanguageChange = withTranslation("translation", {
  bindI18n: "languageChanged",
  bindStore: false,
})(MainNavigation);

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../assets/fonts/Inter-Bold.ttf"),
    Medium: require("../assets/fonts/Inter-Medium.ttf"),
    SemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    Regular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <ReloadAppOnLanguageChange />;
}