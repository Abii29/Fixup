import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import FilterBottomSheet from "../../components/filterBottomSheet";
import CategoryCard from "../../components/categoryCard";
import MyStatusBar from "../../components/myStatusBar";
import { useLocalSearchParams, useNavigation } from "expo-router";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const { title } = useLocalSearchParams();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`categoryScreen:${key}`);
  }

  const category = [
    {
      key: "1",
      title: "Mr. Praneeth",
      img: require("../../assets/images/image1.png"),
      other: "(4k)",
      dollar: "600 Rs/hr",
      cleaner: "Electrician",
      star: 4,
    },
    {
      key: "2",
      title: "Mr. Vimeth",
      img: require("../../assets/images/image2.png"),
      other: "(5k)",
      dollar: "700 Rs/hr",
      cleaner: "Electrician",
      star: 4,
    },
    {
      key: "3",
      title: "Mr. Jinuka",
      img: require("../../assets/images/image3.png"),
      other: "(2k)",
      dollar: "800 Rs/hr",
      cleaner: "Electrician",
      star: 4,
    },
    {
      key: "4",
      title: "Ms. Abilashini",
      img: require("../../assets/images/image4.png"),
      other: "(5k)",
      dollar: "900 Rs/hr",
      cleaner: "Electrician",
      star: 4,
    },
    {
      key: "5",
      title: "Mr. Anuda",
      img: require("../../assets/images/image5.png"),
      other: "(5k)",
      dollar: "1000 Rs/hr",
      cleaner: "Electrician",
      star: 3,
    },
    
  ];

  const renderItemCategory = ({ item, index }) => {
    const isFirst = index === 0;

    return (
      <CategoryCard
        onClick={() =>
          navigation.push("details/detailsScreen", { name: item.cleaner })
        }
        marginTop={isFirst ? Default.fixPadding * 2 : 0}
        marginHorizontal={Default.fixPadding * 2}
        marginBottom={Default.fixPadding * 2}
        img={item.img}
        title={item.title}
        star={item.star}
        other={item.other}
        cleaner={item.cleaner}
        dollar={item.dollar}
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
        <View
          style={{
            flex: 1,
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
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
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold18white,
              marginHorizontal: Default.fixPadding * 1.2,
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <FlatList
        data={category}
        renderItem={renderItemCategory}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryScreen;
