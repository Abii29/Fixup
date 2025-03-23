import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Colors, Fonts, Default } from "../../constants/styles";
import SnackbarToast from "../../components/snackbarToast";
import MyStatusBar from "../../components/myStatusBar";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  function tr(key) {
    return t(`onboardingScreen:${key}`);
  }

  const [exit, setExit] = useState(false);
  const onToggleSnackBarExit = () => setExit(false);

  const [exitApp, setExitApp] = useState(0);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (Platform.OS === "android") {
          setTimeout(() => {
            setExitApp(0);
          }, 2000);

          if (exitApp === 0) {
            setExit;
            setExitApp(exitApp + 1);
            setExit(true);
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

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1, backgroundColor: Colors.extraLightPrimary }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...Fonts.SemiBold22primary,
              textAlign: "center",
              padding: Default.fixPadding * 3,
            }}
          >
            {tr("homeServices")}
          </Text>
          <View
            style={{
              padding: Default.fixPadding * 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode={"contain"}
              source={require("../../assets/images/onBoarding.png")}
              style={{
                width: width * 0.9,
                height: width,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.push("auth/loginScreen")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: Default.fixPadding * 1.2,
              marginBottom: Default.fixPadding * 2,
              marginHorizontal: Default.fixPadding * 2,
              borderRadius: 10,
              backgroundColor: Colors.primary,
            }}
          >
            <Text style={{ ...Fonts.SemiBold18white }}>{tr("getStarted")}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SnackbarToast
        visible={exit}
        onDismiss={onToggleSnackBarExit}
        title={tr("exitApp")}
      />
    </View>
  );
};

export default OnboardingScreen;
