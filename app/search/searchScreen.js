import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const SearchScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`searchScreen:${key}`);
  }

  const recentlySearch = [
    {
      key: "1",
      name: "# Trending service",
    },
    {
      key: "2",
      name: "# Best hair spa service",
    },
    {
      key: "3",
      name: "# Home clean service",
    },
    {
      key: "4",
      name: "# Ac repair service",
    },
  ];
  const trendingSearch = [
    {
      key: "1",
      name: "Best Plumber",
      image: require("../../assets/images/icon10.png"),
    },
    {
      key: "2",
      name: "Best Electrician",
      image: require("../../assets/images/icon12.png"),
    },
    {
      key: "3",
      name: "Ac repair",
      image: require("../../assets/images/icon2.png"),
    },
    {
      key: "4",
      name: "Home cleaning",
      image: require("../../assets/images/icon3.png"),
    },
    {
      key: "5",
      name: "Wash cloth",
      image: require("../../assets/images/icon6.png"),
    },
    {
      key: "6",
      name: "Best hair spa",
      image: require("../../assets/images/icon8.png"),
    },
    {
      key: "7",
      name: "Gardening",
      image: require("../../assets/images/icon5.png"),
    },
    {
      key: "8",
      name: "Painting",
      image: require("../../assets/images/icon9.png"),
    },
  ];

  const [allClear, setAllClear] = useState(false);

  const [search, setSearch] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          padding: Default.fixPadding * 2,
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
        <View
          style={{
            flex: 1,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            padding:
              Platform.OS === "ios"
                ? Default.fixPadding * 1.2
                : Default.fixPadding * 0.8,
            borderRadius: 5,
            marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
            marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <Ionicons name="search-outline" size={20} color={Colors.grey} />
          <TextInput
            value={search}
            autoFocus={true}
            onChangeText={(searchItem) => setSearch(searchItem)}
            placeholder={tr("search")}
            placeholderTextColor={Colors.grey}
            selectionColor={Colors.primary}
            numberOfLines={1}
            style={{
              padding: 0,
              ...Fonts.SemiBold16black,
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              marginHorizontal: Default.fixPadding * 0.8,
            }}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        {allClear ? null : (
          <>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: Default.fixPadding * 2,
                marginTop: Default.fixPadding * 1.5,
                marginBottom: Default.fixPadding,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  marginRight: isRtl ? 0 : Default.fixPadding,
                  marginLeft: isRtl ? Default.fixPadding : 0,
                  ...Fonts.SemiBold15primary,
                }}
              >
                {tr("recentlySearch")}
              </Text>
              <TouchableOpacity onPress={() => setAllClear(true)}>
                <Text
                  numberOfLines={1}
                  style={{ maxWidth: 100, ...Fonts.SemiBold14grey }}
                >
                  {tr("clearAll")}
                </Text>
              </TouchableOpacity>
            </View>

            {recentlySearch.map((item) => {
              return (
                <TouchableOpacity
                  key={item.key}
                  onPress={() =>
                    navigation.push("topServices/topServicesScreen")
                  }
                  style={{
                    alignItems: isRtl ? "flex-end" : "flex-start",
                    marginHorizontal: Default.fixPadding * 2,
                    marginBottom: Default.fixPadding,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{ ...Fonts.Medium14grey, overflow: "hidden" }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
        <View
          style={{
            margin: Default.fixPadding * 2,
          }}
        >
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold15primary,
              marginBottom: Default.fixPadding,
            }}
          >
            {tr("trendingSearch")}
          </Text>

          {trendingSearch.map((item) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.key}
                onPress={() =>
                  navigation.push("category/categoryScreen", {
                    title: item.name,
                  })
                }
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  alignItems: "center",
                  marginBottom: Default.fixPadding * 1.5,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    width: 40,
                    borderRadius: 5,
                    backgroundColor: Colors.white,
                    ...Default.shadow,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ height: 24, width: 24 }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: isRtl ? "flex-end" : "flex-start",
                    marginHorizontal: Default.fixPadding * 1.5,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{ ...Fonts.SemiBold14black, overflow: "hidden" }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
