import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import OngoingTab from "../../components/ongoingTab";
import HistoryTab from "../../components/historyTab";
import MyStatusBar from "../../components/myStatusBar";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "expo-router";

const BookingScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`bookingScreen:${key}`);
  }

  const renderScene = SceneMap({
    ongoingTab: OngoingTab,
    historyTab: HistoryTab,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "ongoingTab", title: tr("ongoing") },
    { key: "historyTab", title: tr("history") },
  ]);

  const renderTabBar = (props) => {
    return (
      <View
        style={{
          paddingTop: Default.fixPadding * 1.6,
          backgroundColor: Colors.primary,
        }}
      >
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
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
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("myBooking")}
          </Text>
        </View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingTop: Default.fixPadding * 2,
            paddingBottom: Default.fixPadding,
          }}
        >
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setIndex(i)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={index === i ? Fonts.Bold16white : Fonts.Bold16grey}
                >
                  {route.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const topTabView = () => {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      {topTabView()}
    </View>
  );
};
export default BookingScreen;
