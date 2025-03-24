import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { Colors, Default, Fonts } from "../../../constants/styles";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";

const MessagesScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`messagesScreen:${key}`);
  }

  const messageList = [
    {
      key: "1",
      title: "Cody Fisher",
      image: require("../../../assets/images/pic1.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "2",
      title: "Albert Flores",
      image: require("../../../assets/images/pic2.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "3",
      title: "Devon Lane",
      image: require("../../../assets/images/pic3.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "4",
      title: "Albert Flores",
      image: require("../../../assets/images/pic4.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "5",
      title: "Marvin McKinney",
      image: require("../../../assets/images/pic5.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "6",
      title: "Jerome Bell",
      image: require("../../../assets/images/pic6.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "7",
      title: "Robert Fox",
      image: require("../../../assets/images/pic7.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "8",
      title: "Annette Black",
      image: require("../../../assets/images/pic8.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "9",
      title: "Jerome Bell",
      image: require("../../../assets/images/pic9.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "10",
      title: "Jerome Bell",
      image: require("../../../assets/images/pic10.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "11",
      title: "Guy Hawkins",
      image: require("../../../assets/images/pic11.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "12",
      title: "Leslie Alexander",
      image: require("../../../assets/images/pic12.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
    {
      key: "13",
      title: "Jeklin Shah",
      image: require("../../../assets/images/pic13.png"),
      message: "Can i see your home",
      time: "2:00am",
    },
  ];

  const renderItemMessage = ({ item, index }) => {
    const isEnd = index === 0;
    return (
      <View
        style={{
          borderTopColor: isEnd ? null : "rgba(0, 93, 122, 0.2)",
          borderTopWidth: isEnd ? null : 1.5,
          marginHorizontal: Default.fixPadding * 2,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "center",
            paddingVertical: Default.fixPadding,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View
              style={{
                flex: 1,
                alignItems: isRtl ? "flex-end" : "flex-start",
                marginHorizontal: Default.fixPadding * 1.5,
              }}
            >
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Medium16primary, overflow: "hidden" }}
              >
                {item.title}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.Medium14grey,
                  overflow: "hidden",
                  marginTop: Default.fixPadding * 0.5,
                }}
              >
                {item.message}
              </Text>
            </View>
          </View>

          <Text
            numberOfLines={1}
            style={{
              ...Fonts.Medium14grey,
              overflow: "hidden",
              marginTop: Default.fixPadding * 0.5,
              maxWidth: 100,
            }}
          >
            {item.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
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
          {tr("messages")}
        </Text>
      </View>

      <FlatList
        data={messageList}
        renderItem={renderItemMessage}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MessagesScreen;
