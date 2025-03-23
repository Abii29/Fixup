import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const ServicesScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`servicesScreen:${key}`);
  }
  const services = [
    {
      key: "1",
      name: "Electrician",
      image: require("../../../assets/images/icon1.png"),
    },
    {
      key: "2",
      name: "Ac repair",
      image: require("../../../assets/images/icon2.png"),
    },
    {
      key: "3",
      name: "Cleaning",
      image: require("../../../assets/images/icon3.png"),
    },
    {
      key: "4",
      name: "Cooking",
      image: require("../../../assets/images/icon4.png"),
    },
    {
      key: "5",
      name: "Gardening",
      image: require("../../../assets/images/icon5.png"),
    },
    {
      key: "6",
      name: "Laundry",
      image: require("../../../assets/images/icon6.png"),
    },
    {
      key: "7",
      name: "Pest control",
      image: require("../../../assets/images/icon7.png"),
    },
    {
      key: "8",
      name: "Salon",
      image: require("../../../assets/images/icon8.png"),
    },
    {
      key: "9",
      name: "Painting",
      image: require("../../../assets/images/icon9.png"),
    },
    {
      key: "10",
      name: "Plumber",
      image: require("../../../assets/images/icon10.png"),
    },
    {
      key: "11",
      name: "Carpenter",
      image: require("../../../assets/images/icon11.png"),
    },
    {
      key: "12",
      name: "Security",
      image: require("../../../assets/images/icon12.png"),
    },
  ];

  const renderItemServices = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.push("category/categoryScreen", {
            title: item.name,
          })
        }
        style={{
          flex: 1,
          alignItems: "center",
          marginHorizontal: Default.fixPadding,
          marginBottom: Default.fixPadding * 2,
          borderRadius: 10,
          paddingVertical: Default.fixPadding * 2,
          paddingHorizontal: Default.fixPadding,
          maxWidth: width / 2 - 30,
          backgroundColor: Colors.white,
          ...Default.shadowPrimary,
        }}
      >
        <Image source={item.image} style={{ height: 35, width: 35 }} />
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.SemiBold15primary,
            marginTop: Default.fixPadding * 0.8,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
          justifyContent: "center",
          paddingVertical: Default.fixPadding * 1.6,
          paddingHorizontal: Default.fixPadding * 2,
          backgroundColor: Colors.primary,
        }}
      >
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.SemiBold18white,
          }}
        >
          {tr("services")}
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={services}
        renderItem={renderItemServices}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Default.fixPadding * 2,
          paddingHorizontal: Default.fixPadding,
        }}
      />
    </View>
  );
};

export default ServicesScreen;
