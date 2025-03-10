import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import FixUp from "./fixup";
import Promotions from "./promotions";
import Notifications from "./notifications";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "FixUp") {
              iconName = "build-outline";
            } else if (route.name === "Promotions") {
              iconName = "pricetag-outline";
            } else if (route.name === "Notifications") {
              iconName = "notifications-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FixUp" component={FixUp} />
        <Tab.Screen name="Promotions" component={Promotions} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
