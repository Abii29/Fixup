import React from "react";
import {Text,View,TouchableOpacity,FlatList,Dimensions,} from "react-native";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import TopServiceProvidersCard from "../../components/topServiceProvidersCard";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const TopServicesScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`topServicesScreen:${key}`);
  }

  const topService = [
    {
      key: "1",
      title: "Mr. Plumber",
      img: require("../../assets/images/top1.png"),
      other: "(4k)",
      dollar: "500.00 Rs",
      star: 4,
    },
    {
      key: "2",
      title: "Mr. Carpenter",
      img: require("../../assets/images/top2.png"),
      other: "(80k)",
      dollar: "1000.00 Rs",
      star: 3,
    },
    {
      key: "3",
      title: "Mr. AC Repair",
      img: require("../../assets/images/top3.png"),
      other: "(7k)",
      dollar: "500.00 Rs",
      star: 5,
    },
    {
      key: "4",
      title: "Mr. TV Repair",
      img: require("../../assets/images/top5.png"),
      other: "(2k)",
      dollar: "1000.00 Rs",
      star: 4,
    },
    {
      key: "5",
      title: "Ms. Hair spa",
      img: require("../../assets/images/top4.png"),
      other: "(6k)",
      dollar: "2000.00 Rs",
      star: 5,
    },
    {
      key: "6",
      title: "Mr. Clean",
      img: require("../../assets/images/offer1.png"),
      other: "(10k)",
      dollar: "500.00 Rs",
      star: 3,
    },
  ];

  const renderItemTopService = ({ item, index }) => {
    const isEnd =
      index === topService.length - 1 || index === topService.length - 2;
    return (
      <TopServiceProvidersCard
        onClick={() =>
          navigation.push("details/detailsScreen", { name: item.title })
        }
        marginHorizontal={Default.fixPadding}
        marginTop={Default.fixPadding * 2}
        marginBottom={isEnd ? Default.fixPadding * 2 : 0}
        height={142}
        img={item.img}
        width={"100%"}
        title={item.title}
        star={item.star}
        other={item.other}
        dollar={item.dollar}
        maxWidth={width / 2 - 30}
      />
    );
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
          {tr("topServices")}
        </Text>
      </View>

      <FlatList
        numColumns={2}
        data={topService}
        renderItem={renderItemTopService}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Default.fixPadding }}
      />
    </View>
  );
};

export default TopServicesScreen;
