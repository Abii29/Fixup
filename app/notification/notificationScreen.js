import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { SwipeListView } from "react-native-swipe-list-view";
import SnackbarToast from "../../components/snackbarToast";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const NotificationScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`notificationScreen:${key}`);
  }

  const [notificationToast, setNotificationToast] = useState(false);

  const onDismissNotificationToast = () => setNotificationToast(false);

  const notificationList = [
    {
      key: "1",
      title: "Plumber",
      description: "Your plumber service book successfully.",
      status: "2 min ago",
      image: require("../../assets/images/icon10.png"),
    },
    {
      key: "2",
      title: "Home cleaning",
      description: "Your cleaning service book successfully.",
      status: "2 min ago",
      image: require("../../assets/images/icon3.png"),
    },
    {
      key: "3",
      title: "Best offer",
      description: "Get 50% off on your ac repair service.",
      status: "2 min ago",
      image: require("../../assets/images/icon2.png"),
    },
    {
      key: "4",
      title: "Painting",
      description: "Your painting service book successfully.",
      status: "2 min ago",
      image: require("../../assets/images/icon9.png"),
    },
    {
      key: "5",
      title: "Cancel booking",
      description: "Your Spa service successfully cancel.",
      status: "2 min ago",
      image: require("../../assets/images/icon8.png"),
    },
    {
      key: "6",
      title: "Electrician",
      description: "Your electrician service book successfully.",
      status: "2 min ago",
      image: require("../../assets/images/icon1.png"),
    },
    {
      key: "7",
      title: "Get discount",
      description: "Book you service get 20% off all services.",
      status: "2 min ago",
      image: require("../../assets/images/icon5.png"),
    },
  ];
  const rowTranslateAnimatedValues = {};
  notificationList.forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

  const [listData, setListData] = useState(
    notificationList.map((NotificationItem, i) => ({
      key: `${i}`,
      title: NotificationItem.title,
      description: NotificationItem.description,
      status: NotificationItem.status,
      image: NotificationItem.image,
    }))
  );

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    if (
      value < -Dimensions.get("window").width ||
      value > Dimensions.get("window").width
    ) {
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex((item) => item.key === key);
        newData.splice(prevIndex, 1);
        setListData(newData);
        setNotificationToast(true);
      });
    }
  };

  const renderItem = (data) => {
    return (
      <View style={{ backgroundColor: Colors.extraLightGrey }}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingHorizontal: Default.fixPadding * 1.5,
            paddingVertical: Default.fixPadding * 0.6,
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 2,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: Default.fixPadding,
              height: 48,
              width: 48,
              borderRadius: 10,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <Image source={data.item.image} style={{ height: 28, width: 28 }} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: isRtl ? "flex-end" : "flex-start",
              marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
              marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...Fonts.SemiBold16black, overflow: "hidden" }}
            >
              {data.item.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.Medium14Black,
                marginVertical: Default.fixPadding * 0.3,
                overflow: "hidden",
              }}
            >
              {data.item.description}
            </Text>
            <Text numberOfLines={1} style={Fonts.Medium14grey}>
              {data.item.status}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHiddenItem = () => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: Default.fixPadding * 2,
          backgroundColor: Colors.primary,
        }}
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
          {tr("notification")}
        </Text>
      </View>

      {listData.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons
            name="notifications-off-outline"
            size={40}
            color={Colors.grey}
          />
          <Text style={{ ...Fonts.SemiBold16grey }}>
            {tr("noNotification")}
          </Text>
        </View>
      ) : (
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-Dimensions.get("window").width}
          leftOpenValue={Dimensions.get("window").width}
          onSwipeValueChange={onSwipeValueChange}
          useNativeDriver={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: Default.fixPadding * 2 }}
        />
      )}
      <SnackbarToast
        title={tr("remove")}
        visible={notificationToast}
        onDismiss={onDismissNotificationToast}
      />
    </View>
  );
};

export default NotificationScreen;
