import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const SuccessScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  function tr(key) {
    return t(`successScreen:${key}`);
  }
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.push("(tabs)");
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.extraLightGrey,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Image
            source={require("../../assets/images/yes.png")}
            style={{ height: 133, width: 133 }}
            resizeMode="contain"
          />
          <Text
            style={{
              ...Fonts.SemiBold22black,
            }}
          >
            {tr("paymentSuccessful")}
          </Text>

          <Text
            style={{
              ...Fonts.Medium14grey,
              textAlign: "center",
              marginTop: Default.fixPadding * 2,
              maxWidth: "70%",
            }}
          >
            {tr("description")}{"\n"}
          </Text>
          <Text
            style={{
              ...Fonts.Medium14grey,
              textAlign: "center",
              maxWidth: "70%",
            }}
          >
            {tr("orderId")} : IIT-20231203
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.push("(tabs)")}>
          <Text
            style={{
              ...Fonts.SemiBold16primary,
              textAlign: "center",
              margin: Default.fixPadding * 2,
            }}
          >
            {tr("backHome")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;
