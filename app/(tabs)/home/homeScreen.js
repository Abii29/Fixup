import {StyleSheet,Text,View,TouchableOpacity,Image,FlatList,} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, Default, Fonts } from "../../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";
import TopServiceProvidersCard from "../../../components/topServiceProvidersCard";
import MyStatusBar from "../../../components/myStatusBar";
import Swiper from "react-native-swiper";
import { useNavigation } from "expo-router";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`homeScreen:${key}`);
  }
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setAutoplay(false);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setAutoplay(true);
    });

    return unsubscribe;
  }, [navigation]);

  const slides = [
    {
      title: tr("repairing"),
      other: tr("atHome"),
      off: tr("off"),
    },
    {
      title: tr("repairing"),
      other: tr("atHome"),
      off: tr("off"),
    },
    {
      title: tr("repairing"),
      other: tr("atHome"),
      off: tr("off"),
    },
  ];

  const bestOffer = [
    {
      key: "1",
      title: "Complete home cleaning",
      img: require("../../../assets/images/offer1.png"),
      other: "(4k)",
      dollar: "1000.00 Rs",
      off: "40% off",
      star: 4,
    },
    {
      key: "2",
      title: "Wash and fold",
      img: require("../../../assets/images/offer2.png"),
      other: "(3k)",
      dollar: "200.00 Rs/per kg",
      off: "40% off",
      star: 4,
    },
    {
      key: "3",
      title: "Home painting",
      img: require("../../../assets/images/offer3.png"),
      other: "(2k)",
      dollar: "5000.00 Rs",
      off: "40% off",
      star: 4,
    },
  ];

  const renderItemBestOffer = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.push("details/detailsScreen", { name: item.title })
        }
        style={{
          marginHorizontal: Default.fixPadding,
          marginBottom: Default.fixPadding * 2,
          width: 197,
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 197,
            height: 142,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            position: "absolute",
            alignSelf: isRtl ? "flex-start" : "flex-end",
            paddingVertical: Default.fixPadding * 0.5,
            paddingHorizontal: Default.fixPadding * 0.4,
            borderBottomLeftRadius: isRtl ? 0 : 10,
            borderBottomRightRadius: isRtl ? 10 : 0,
            borderTopRightRadius: isRtl ? 0 : 10,
            borderTopLeftRadius: isRtl ? 10 : 0,
            backgroundColor: Colors.primary,
            width: 80,
          }}
        >
          <Text
            numberOfLines={1}
            style={{ ...Fonts.SemiBold14white, textAlign: "center" }}
          >
            {item.off}
          </Text>
        </View>
        <View
          style={{
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding * 0.8,
            marginVertical: Default.fixPadding * 0.5,
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
              emptyStar={<Ionicons name="star" color={Colors.grey} size={15} />}
            />
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.SemiBold14grey,
                marginHorizontal: Default.fixPadding * 0.3,
                overflow: "hidden",
                maxWidth: 50,
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
      </TouchableOpacity>
    );
  };

  const topService = [
    {
      key: "1",
      title: "Mr. Plumber",
      img: require("../../../assets/images/top1.png"),
      other: "(4k)",
      dollar: "500.00 Rs + Other Exp.",
      star: 4,
    },
    {
      key: "2",
      title: "Mr. Carpenter",
      img: require("../../../assets/images/top2.png"),
      other: "(5k)",
      dollar: "600.00 Rs + Other Exp.",
      star: 4,
    },
    {
      key: "3",
      title: "Mr. Repair",
      img: require("../../../assets/images/top3.png"),
      other: "(2k)",
      dollar: "700.00 Rs + Other Exp.",
      star: 4,
    },
    {
      key: "4",
      title: "Ms. Spa",
      img: require("../../../assets/images/top4.png"),
      other: "(3k)",
      dollar: "800.00 Rs + Other Exp.",
      star: 4,
    },
  ];

  const renderItemTopService = ({ item }) => {
    return (
      <TopServiceProvidersCard
        onClick={() =>
          navigation.push("details/detailsScreen", { name: item.title })
        }
        marginHorizontal={Default.fixPadding}
        marginBottom={Default.fixPadding * 2}
        marginTop={0}
        width={197}
        height={142}
        img={item.img}
        title={item.title}
        star={item.star}
        other={item.other}
        dollar={item.dollar}
      />
    );
  };

  const servicesList = [
    {
      key: "1",
      image: require("../../../assets/images/icon1.png"),
      name: "Electrician",
    },
    {
      key: "2",
      image: require("../../../assets/images/icon11.png"),
      name: "Carpentar",
    },
    {
      key: "3",
      image: require("../../../assets/images/icon9.png"),
      name: "Painting",
    },
    {
      key: "4",
      image: require("../../../assets/images/icon3.png"),
      name: "Cleaning",
    },
    {
      key: "5",
      image: require("../../../assets/images/icon10.png"),
      name: "Plumber",
    },
    {
      key: "6",
      image: require("../../../assets/images/icon9.png"),
      name: tr("more"),
    },
  ];

  const renderItemServices = ({ item, index }) => {
    const moreIndex = servicesList.length - 1 === index;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (moreIndex) {
            navigation.navigate("services/servicesScreen");
          } else {
            navigation.push("category/categoryScreen", {
              title: item.name,
            });
          }
        }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: Default.fixPadding,
          marginBottom: Default.fixPadding * 2,
          paddingVertical: Default.fixPadding * 1.5,
          paddingHorizontal: Default.fixPadding * 0.5,
          width: "100%",
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        {moreIndex ? (
          <Ionicons name="add" size={35} color={Colors.primary} />
        ) : (
          <Image source={item.image} style={{ height: 35, width: 35 }} />
        )}
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.SemiBold15primary,
            overflow: "hidden",
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
          paddingVertical: Default.fixPadding * 1.5,
          paddingTop: Default.fixPadding * 2,
          backgroundColor: Colors.primary,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginBottom: Default.fixPadding * 1.5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              paddingHorizontal: Default.fixPadding * 2,
            }}
          >
            <SimpleLineIcons
              name="location-pin"
              size={20}
              color={Colors.white}
            />
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                textAlign: isRtl ? "right" : "left",
                ...Fonts.Medium14white,
                marginHorizontal: Default.fixPadding * 0.6,
              }}
            >
              Bambalapitiya, Colombo 04
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("notification/notificationScreen")}
            style={{
              paddingHorizontal: Default.fixPadding * 2,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.push("search/searchScreen")}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            padding: Default.fixPadding,
            marginHorizontal: Default.fixPadding * 2,
            borderRadius: 5,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <Ionicons name="search" size={20} color={Colors.grey} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16grey,
              marginHorizontal: Default.fixPadding * 0.8,
            }}
          >
            {tr("search")}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={3}
        data={servicesList}
        renderItem={renderItemServices}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ paddingHorizontal: Default.fixPadding }}
        ListHeaderComponent={
          <View>
            <Swiper
              style={{
                height: 205,
              }}
              dot={
                <View
                  style={{
                    backgroundColor: Colors.lightGrey,
                    ...styles.dotIndicator,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: Colors.primary,
                    ...styles.dotIndicator,
                  }}
                />
              }
              paginationStyle={{
                bottom: 0,
                marginBottom: Default.fixPadding,
              }}
              loop={true}
              autoplay={autoplay}
            >
              {slides.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      marginHorizontal: Default.fixPadding * 2,
                      height: 152,
                      borderRadius: 10,
                      backgroundColor: Colors.white,
                      marginVertical: Default.fixPadding * 2,
                      ...Default.shadow,
                    }}
                  >
                    <Image
                      source={
                        isRtl
                          ? require("../../../assets/images/ac.png")
                          : require("../../../assets/images/acRepairing.png")
                      }
                      style={{ flex: 6.5, height: 152 }}
                      resizeMode={"stretch"}
                    />
                    <View
                      style={{
                        flex: 3.5,
                        justifyContent: "center",
                        paddingHorizontal: Default.fixPadding * 1.5,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ ...Fonts.Bold18primary, overflow: "hidden" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          ...Fonts.Medium14lightGreen,
                          overflow: "hidden",
                        }}
                      >
                        {item.other}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          ...Fonts.SemiBold20darkRed,
                          overflow: "hidden",
                          textAlign: "center",
                          marginVertical: Default.fixPadding * 0.8,
                        }}
                      >
                        {item.off}
                      </Text>

                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          navigation.push("details/detailsScreen", {
                            name: item.title,
                          })
                        }
                        style={{
                          paddingVertical: Default.fixPadding * 0.3,
                          paddingHorizontal: Default.fixPadding * 1.5,
                          borderRadius: 5,
                          backgroundColor: Colors.white,
                          ...Default.shadow,
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{
                            ...Fonts.SemiBold16primary,
                            textAlign: "center",
                            overflow: "hidden",
                          }}
                        >
                          {tr("bookNow")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </Swiper>

            <Text
              style={{
                textAlign: isRtl ? "right" : "left",
                ...Fonts.SemiBold16black,
                marginHorizontal: Default.fixPadding * 1.5,
                marginBottom: Default.fixPadding,
              }}
            >
              {tr("services")}
            </Text>
          </View>
        }
        ListFooterComponent={
          <View>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                marginHorizontal: Default.fixPadding * 1.5,
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
                  ...Fonts.SemiBold16black,
                }}
              >
                {tr("bestOffer")}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.push("bestOffer/bestOfferScreen")}
              >
                <Text
                  numberOfLines={1}
                  style={{ maxWidth: 100, ...Fonts.SemiBold14primary }}
                >
                  {tr("seeAll")}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              inverted={isRtl}
              horizontal
              data={bestOffer}
              renderItem={renderItemBestOffer}
              keyExtractor={(item) => item.key}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: Default.fixPadding }}
            />

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                marginHorizontal: Default.fixPadding * 2,
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
                  ...Fonts.SemiBold16black,
                }}
              >
                {tr("topService")}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.push("topServices/topServicesScreen")}
              >
                <Text
                  numberOfLines={1}
                  style={{ maxWidth: 100, ...Fonts.SemiBold14primary }}
                >
                  {tr("seeAll")}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              inverted={isRtl}
              horizontal
              data={topService}
              renderItem={renderItemTopService}
              keyExtractor={(item) => item.key}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: Default.fixPadding }}
            />
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dotIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: Default.fixPadding * 0.3,
  },
});
