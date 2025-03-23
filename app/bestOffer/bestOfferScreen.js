import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const BestOfferScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`bestOfferScreen:${key}`);
  }

  const bestOffer = [
    {
      key: "1",
      title: "Complete home cleaning",
      img: require("../../assets/images/img1.png"),
      other: "(4k)",
      dollar: "1500.00 Rs",
      off: "40% off",
      star: 4,
    },
    {
      key: "2",
      title: "Repair your ac",
      img: require("../../assets/images/img2.png"),
      other: "(2k)",
      dollar: "1500.00 Rs",
      off: "20% off",
      star: 5,
    },
    {
      key: "3",
      title: "Best hair spa at home",
      img: require("../../assets/images/img3.png"),
      other: "(15)",
      dollar: "1000.00 Rs",
      off: "50% off",
      star: 3,
    },
    {
      key: "4",
      title: "Wash and fold  clothes",
      img: require("../../assets/images/img4.png"),
      other: "(4k)",
      dollar: "500.00 Rs",
      off: "40% off",
      star: 5,
    },
    {
      key: "5",
      title: "Paint your home",
      img: require("../../assets/images/img5.png"),
      other: "(4k)",
      dollar: "5000.00 Rs",
      off: "30% off",
      star: 4,
    },
  ];

  const renderItemBestOffer = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.push("details/detailsScreen", { name: item.title })
        }
        style={{
          marginTop: isFirst ? Default.fixPadding * 2 : 0,
          marginHorizontal: Default.fixPadding * 2,
          marginBottom: Default.fixPadding * 2,
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <Image
          source={item.img}
          style={{
            height: 142,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginVertical: Default.fixPadding * 0.6,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginHorizontal: Default.fixPadding * 0.8,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.SemiBold15black, overflow: "hidden" }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginVertical: Default.fixPadding * 0.2,
              }}
            >
              <Stars
                disabled
                default={item.star}
                count={5}
                half={false}
                starSize={15}
                spacing={3}
                fullStar={
                  <Ionicons name="star" color={Colors.orange} size={15} />
                }
                emptyStar={
                  <Ionicons name="star" color={Colors.grey} size={15} />
                }
              />
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.SemiBold14grey,
                  marginHorizontal: Default.fixPadding * 0.3,
                  overflow: "hidden",
                  maxWidth: 100,
                }}
              >
                {item.other}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Bold16primary,
                overflow: "hidden",
              }}
            >
              {item.dollar}
            </Text>
          </View>

          <View
            style={{
              width: 105,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: Default.fixPadding,
              padding: Default.fixPadding * 0.5,
              borderRadius: 5,
              backgroundColor: Colors.primary,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.SemiBold16white, overflow: "hidden" }}
            >
              {item.off}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingHorizontal: Default.fixPadding * 2,
          paddingVertical: Default.fixPadding * 1.6,
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
          {tr("bestOffer")}
        </Text>
      </View>
      <FlatList
        data={bestOffer}
        renderItem={renderItemBestOffer}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BestOfferScreen;
