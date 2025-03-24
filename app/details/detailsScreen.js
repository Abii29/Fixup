import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Share,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";
import SnackbarToast from "../../components/snackbarToast";
import MyStatusBar from "../../components/myStatusBar";
import CollapsibleToolbar from "react-native-collapsible-toolbar";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const DetailsScreen = () => {
  const { name } = useLocalSearchParams();
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`detailsScreen:${key}`);
  }

  const shareMessage = () => {
    Share.share({
      message: "FiXUP",
    });
  };
  const [like, setLike] = useState(false);

  const [likeRemove, setLikeRemove] = useState(false);
  const onToggleSnackBarRemove = () => setLikeRemove(false);

  const [likeAdd, setLikeAdd] = useState(false);
  const onToggleSnackBarAdd = () => setLikeAdd(false);

  const [readMore, setReadMore] = useState(true);

  const review = [
    {
      key: "1",
      name: "Person 1",
      image: require("../../assets/images/review1.png"),
      description:
        "Lorem ipsum dolor sit amet, elist consectetur adipiscing elitj. Eu scelerisque neqneque vestibulum augue enullalkll quis mauris. ",
      star: 5,
    },
    {
      key: "2",
      name: "Person 2",
      image: require("../../assets/images/review2.png"),
      description:
        "Lorem ipsum dolor sit amet, elist consectetur adipiscing elitj. Eu scelerisque neqneque vestibulum augue enullalkll quis mauris. ",
      star: 4,
    },
  ];

  const renderContent = () => {
    return (
      <View style={{ backgroundColor: Colors.extraLightGrey }}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            marginHorizontal: Default.fixPadding * 2,
            paddingBottom: Default.fixPadding * 2,
          }}
        >
          <View
            style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
          >
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.SemiBold16black,
                marginTop: Default.fixPadding * 1.5,
              }}
            >
              Praneeth Perera
            </Text>

            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginTop: Default.fixPadding * 0.5,
              }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={15}
                color={Colors.grey}
              />
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.SemiBold12grey,
                  marginLeft: isRtl ? 0 : Default.fixPadding * 0.3,
                  marginRight: isRtl ? Default.fixPadding * 0.3 : 0,
                }}
              >
                Bambalapitiya
              </Text>
            </View>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginVertical: Default.fixPadding * 0.5,
              }}
            >
              <Stars
                disabled
                default={5}
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
                  overflow: "hidden",
                  marginHorizontal: Default.fixPadding * 0.3,
                  maxWidth: 80,
                }}
              >
                (7K)
              </Text>
            </View>
            <Text numberOfLines={1} style={{ ...Fonts.SemiBold16primary }}>
              250.00 Rs/hr
            </Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 20,
                marginHorizontal: Default.fixPadding * 1.5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }
            }
            >
              <Ionicons
                name="chatbox-outline"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity
            >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              
              <Ionicons 
                name="call-outline" 
                size={20} 
                color={Colors.primary} 
              />
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: Default.fixPadding * 2 }}>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginBottom: Default.fixPadding * 0.5,
            }}
          >
            {tr("description")}
          </Text>

          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.Medium14grey,
            }}
          >
            {readMore ? tr("shortDescription") : tr("longDescription")}
            <Text
              style={{ ...Fonts.Medium14primary }}
              onPress={() => setReadMore((desc) => !desc)}
            >
              {readMore ? ` ${tr("readMore")}` : ` ${tr("readLess")}`}
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            marginHorizontal: Default.fixPadding * 1.5,
            marginBottom: Default.fixPadding,
            marginTop: Default.fixPadding * 2,
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
            {tr("serviceReview")}
          </Text>
          <TouchableOpacity>
            <Text
              numberOfLines={1}
              style={{ maxWidth: 100, ...Fonts.SemiBold14primary }}
            >
              {tr("seeAll")}
            </Text>
          </TouchableOpacity>
        </View>

        {review.map((item) => {
          return (
            <View
              key={item.key}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginHorizontal: Default.fixPadding * 1.5,
                marginBottom: Default.fixPadding * 1.5,
                padding: Default.fixPadding,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: 72,
                  width: 72,
                  borderRadius: 36,
                }}
              />

              <View
                style={{
                  flex: 1,
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  marginLeft: isRtl ? 0 : Default.fixPadding,
                  marginRight: isRtl ? Default.fixPadding : 0,
                }}
              >
                <View
                  style={{
                    flexDirection: isRtl ? "row-reverse" : "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      textAlign: isRtl ? "right" : "left",
                      ...Fonts.Medium16Black,
                      overflow: "hidden",
                      marginRight: isRtl ? 0 : Default.fixPadding,
                      marginLeft: isRtl ? Default.fixPadding : 0,
                    }}
                  >
                    {item.name}
                  </Text>
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
                </View>

                <Text
                  numberOfLines={4}
                  style={{
                    ...Fonts.Medium14grey,
                    overflow: "hidden",
                    textAlign: isRtl ? "right" : "left",
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  const renderNavBar = () => {
    return (
      <View
        style={{
          position: "absolute",
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          marginVertical: Default.fixPadding * 1.5,
          paddingHorizontal: Default.fixPadding * 2,
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
            {name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setLike((like) => !like);
              {
                like ? setLikeAdd(!likeAdd) : setLikeRemove(!likeRemove);
              }
            }}
            style={{
              marginRight: isRtl ? 0 : Default.fixPadding,
              marginLeft: isRtl ? Default.fixPadding : 0,
            }}
          >
            <Ionicons
              name={like ? "heart-outline" : "heart"}
              color={Colors.white}
              size={25}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareMessage}>
            <Ionicons
              name="share-social-outline"
              color={Colors.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const data = [
    { id: "1", image: require("../../assets/images/detail.png") },
    { id: "2", image: require("../../assets/images/detail2.png") },
    { id: "3", image: require("../../assets/images/detail3.png") },
  ];

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useFocusEffect(
    useCallback(() => {
      startAutoScroll();

      return () => stopAutoScroll();
    }, [])
  );

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const renderItemSwiper = ({ item }) => (
    <View>
      <Image source={item.image} style={{ height: 263, width: width }} />
    </View>
  );

  const renderToolBar = () => {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderItemSwiper}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          scrollEnabled={false}
        />
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            ...styles.dotWrapStyle,
          }}
        >
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    currentIndex === index ? Colors.primary : Colors.white,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />

      <View style={{ flex: 1 }}>
        <CollapsibleToolbar
          renderContent={renderContent}
          renderNavBar={renderNavBar}
          renderToolBar={renderToolBar}
          collapsedNavBarBackgroundColor={Colors.primary}
          toolBarHeight={263}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity
          onPress={() => navigation.push("confirm/confirmScreen")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: Default.fixPadding * 2,
            paddingVertical: Default.fixPadding * 1.2,
            borderRadius: 10,
            backgroundColor: Colors.primary,
          }}
        >
          <Text style={{ ...Fonts.SemiBold18white }}>{tr("bookNow")}</Text>
        </TouchableOpacity>
        <SnackbarToast
          visible={likeAdd}
          onDismiss={onToggleSnackBarAdd}
          title={tr("added")}
        />

        <SnackbarToast
          visible={likeRemove}
          onDismiss={onToggleSnackBarRemove}
          title={tr("remove")}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: Default.fixPadding * 0.3,
  },
  dotWrapStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Default.fixPadding,
    justifyContent: "center",
    alignItems: "center",
  },
});
