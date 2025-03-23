import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";
import DashedLine from "react-native-dashed-line";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const PaymentMethodScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`paymentMethodScreen:${key}`);
  }

  const payment = [
    {
      key: "1",
      name: tr("mastercard"),
      image: require("../../assets/images/credit.png"),
    },
 
    {
      key: "2",
      name: tr("payPal"),
      image: require("../../assets/images/payPal.png"),
    },

    {
      key: "3",
      name: tr("cashServices"),
      image: require("../../assets/images/pay5.png"),
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState(tr("cashServices"));

  const continueHandler = () => {
    if (selectedPayment === tr("googlePay")) {
      navigation.push("googlePay/googlePayScreen");
    } else if (selectedPayment === tr("payPal")) {
      navigation.push("payPal/payPalScreen");
    } else {
      navigation.push("creditCard/creditCardScreen");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />

      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: Default.fixPadding * 1.6,
          paddingHorizontal: Default.fixPadding * 2,
          backgroundColor: Colors.primary,
        }}
      >
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons
            name={isRtl ? "arrow-forward" : "arrow-back"}
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...Fonts.SemiBold18white,
            marginHorizontal: Default.fixPadding * 1.2,
          }}
        >
          {tr("paymentMethod")}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {payment.map((item, index) => {
          const isFirst = index === 0;
          return (
            <TouchableOpacity
              key={item.key}
              activeOpacity={0.8}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: Default.fixPadding * 0.9,
                paddingVertical: Default.fixPadding * 1.1,
                marginHorizontal: Default.fixPadding * 2,
                marginTop: isFirst ? Default.fixPadding * 2 : 0,
                marginBottom: Default.fixPadding * 2,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
              onPress={() => setSelectedPayment(item.name)}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: Colors.white,
                    ...Default.shadow,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 25, height: 20 }}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    textAlign: isRtl ? "right" : "left",
                    ...Fonts.Medium16Black,
                    marginTop: Default.fixPadding * 0.5,
                    marginHorizontal: Default.fixPadding,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <MaterialCommunityIcons
                name={
                  selectedPayment === item.name
                    ? "record-circle"
                    : "circle-outline"
                }
                size={25}
                color={
                  selectedPayment === item.name ? Colors.primary : Colors.grey
                }
              />
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: Default.fixPadding,
            marginTop: Default.fixPadding * 4,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Medium16Black,
              overflow: "hidden",
            }}
          >
            {tr("price")}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold14primary,
              overflow: "hidden",
              maxWidth: 100,
            }}
          >
            Rs. 600.00
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Medium16Black,
              overflow: "hidden",
            }}
          >
            {tr("discount")}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold14primary,
              overflow: "hidden",
              maxWidth: 100,
            }}
          >
            - Rs. 100.00
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: Default.fixPadding,
            paddingBottom: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Medium16Black,
              overflow: "hidden",
            }}
          >
            {tr("total")}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold14primary,
              overflow: "hidden",
              maxWidth: 100,
            }}
          >
            Rs. 500.00
          </Text>
        </View>
        <DashedLine
          dashLength={2}
          dashThickness={1}
          dashGap={2}
          dashColor={Colors.primary}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.push("success/successScreen")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: Default.fixPadding * 2,
          padding: Default.fixPadding * 1.2,
          borderRadius: 10,
          backgroundColor: Colors.primary,
        }}
      >
        <Text style={{ ...Fonts.SemiBold18white }}>{tr("payment")}</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default PaymentMethodScreen;
