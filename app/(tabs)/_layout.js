import { BackHandler, Platform, Pressable } from "react-native";
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Colors, Default } from "../../constants/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import SnackbarToast from "../../components/snackbarToast";
import { useFocusEffect } from "@react-navigation/native";
import { Tabs } from "expo-router";

export default function _layout() {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`bottomTab:${key}`);
  }

  const [visibleToast, setVisibleToast] = useState(false);
  const onDismissVisibleToast = () => setVisibleToast(false);

  const [exitApp, setExitApp] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExitApp(exitApp + 1);
            setVisibleToast(true);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        }
      };
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [exitApp])
  );

  const title1 = isRtl ? tr("profile") : tr("home");
  const title2 = isRtl ? tr("home") : tr("profile");
  const title3 = isRtl ? tr("messages") : tr("services");
  const title4 = isRtl ? tr("services") : tr("messages");

  return (
    <>
      <Tabs
        initialRouteName="home/homeScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 68,
            padding: Default.fixPadding * 0.5,
            borderTopWidth: 0,
            backgroundColor: Colors.white,
            ...Default.shadow,
            paddingTop: Default.fixPadding * 0.4,
          },
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{
                color: Colors.white,
              }}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: "SemiBold",
            fontSize: 15,
            paddingBottom: Default.fixPadding * 0.5,
          },
          tabBarItemStyle: {
            height: 55,
            marginHorizontal: Default.fixPadding * 0.5,
          },
          tabBarInactiveTintColor: Colors.grey,
          tabBarActiveTintColor: Colors.primary,
        }}
      >
        <Tabs.Screen
          name={isRtl ? "profile/profileScreen" : "home/homeScreen"}
          options={{
            title: title1,
            tabBarIcon: ({ focused }) => (
              <Feather
                name={isRtl ? "user" : "home"}
                color={focused ? Colors.primary : Colors.grey}
                size={22}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={isRtl ? "messages/messagesScreen" : "services/servicesScreen"}
          options={{
            title: title3,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={isRtl ? "message-outline" : "cellphone-cog"}
                color={focused ? Colors.primary : Colors.grey}
                size={22}
              />
            ),
          }}
        />

        <Tabs.Screen
          name={isRtl ? "services/servicesScreen" : "messages/messagesScreen"}
          options={{
            title: title4,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={isRtl ? "cellphone-cog" : "message-outline"}
                color={focused ? Colors.primary : Colors.grey}
                size={22}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={isRtl ? "home/homeScreen" : "profile/profileScreen"}
          options={{
            title: title2,
            tabBarIcon: ({ focused }) => (
              <Feather
                name={isRtl ? "home" : "user"}
                color={focused ? Colors.primary : Colors.grey}
                size={22}
              />
            ),
          }}
        />
      </Tabs>

      <SnackbarToast
        visible={visibleToast}
        title={tr("exitApp")}
        onDismiss={onDismissVisibleToast}
      />
    </>
  );
}
