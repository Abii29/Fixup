import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const HistoryTab = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`historyTab:${key}`);
  }
  const [rate, setRate] = useState(false);

  const [rateDescription, setRateDescription] = useState();

  const historyList = [
    {
      key: "1",
      name: "Guy Hawkins",
      image: require("../assets/images/booking1.png"),
      other: "Oct 20,2022 at 2.00am",
      title: "Cleaner",
    },
    {
      key: "2",
      name: "Jenny Wilson",
      image: require("../assets/images/booking2.png"),
      other: "Oct 22,2022 at 2.00am",
      title: "Plumber",
    },
    {
      key: "3",
      name: "Jacob Jones",
      image: require("../assets/images/booking3.png"),
      other: "Oct 21,2022 at 2.00am",
      title: "Laundry",
    },
    {
      key: "4",
      name: "Guy Hawkins",
      image: require("../assets/images/booking4.png"),
      other: "Oct 20,2022 at 2.00am",
      title: "Painting",
    },
    {
      key: "5",
      name: "Albert Flores",
      image: require("../assets/images/booking5.png"),
      other: "Oct 24,2022 at 2.00am",
      title: "Ac repair",
    },
    {
      key: "6",
      name: "Annette Black",
      image: require("../assets/images/booking6.png"),
      other: "Oct 24,2022 at 2.00am",
      title: "Cleaner",
    },
  ];
  const renderItem = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.push("details/detailsScreen", { name: item.title })
        }
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: Default.fixPadding,
          marginHorizontal: Default.fixPadding * 2,
          marginBottom: Default.fixPadding * 2,
          marginTop: isFirst ? Default.fixPadding * 2 : 0,
          paddingHorizontal: Default.fixPadding,
          borderRadius: 10,
          backgroundColor: Colors.white,
          ...Default.shadow,
        }}
      >
        <Image
          source={item.image}
          style={{
            borderRadius: 5,
            height: 77,
            width: 77,
          }}
        />

        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold15black,
              overflow: "hidden",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold12grey,
              overflow: "hidden",
              textAlign: isRtl ? "right" : "left",
              marginVertical: Default.fixPadding * 0.3,
            }}
          >
            {item.other}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold14primary,
              overflow: "hidden",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {item.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setRate(true)}
          style={{
            width: 86,
            padding: Default.fixPadding * 0.5,
            borderRadius: 5,
            backgroundColor: Colors.primary,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold15white,
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {tr("giveRate")}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <FlatList
        data={historyList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={rate}
        onRequestClose={() => setRate(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setRate(false)}
          style={{ flex: 1 }}
        >
          <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.transparentBlack,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  width: width * 0.9,
                  borderRadius: 10,
                  backgroundColor: Colors.white,
                  ...Default.shadow,
                }}
              >
                <TouchableWithoutFeedback>
                  <View>
                    <View>
                      <Text
                        style={{
                          ...Fonts.SemiBold18black,
                          textAlign: "center",
                          marginTop: Default.fixPadding * 2,
                        }}
                      >
                        {tr("giveRate")}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setRate(false)}
                        style={{
                          position: "absolute",
                          alignSelf: isRtl ? "flex-start" : "flex-end",
                          padding: Default.fixPadding,
                        }}
                      >
                        <Ionicons name="close" size={22} color={Colors.grey} />
                      </TouchableOpacity>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...Fonts.Medium14grey,
                        overflow: "hidden",
                        textAlign: "center",
                        marginHorizontal: Default.fixPadding,
                        marginTop: Default.fixPadding,
                        marginBottom: Default.fixPadding * 1.5,
                      }}
                    >
                      {tr("please")}
                    </Text>
                    <Stars
                      default={4}
                      count={5}
                      spacing={10}
                      half={false}
                      starSize={15}
                      fullStar={
                        <Ionicons
                          name="star"
                          color={Colors.primary}
                          size={30}
                        />
                      }
                      emptyStar={
                        <Ionicons name="star" color={Colors.grey} size={30} />
                      }
                    />
                    <View
                      style={{
                        marginHorizontal: Default.fixPadding * 2,
                        marginTop: Default.fixPadding * 1.5,
                        padding: Default.fixPadding,
                        height: 110,
                        borderRadius: 10,
                        backgroundColor: Colors.white,
                        ...Default.shadow,
                      }}
                    >
                      <TextInput
                        value={rateDescription}
                        onChangeText={setRateDescription}
                        textAlignVertical="top"
                        multiline={true}
                        numberOfLines={5}
                        placeholder={tr("saySomething")}
                        placeholderTextColor={Fonts.grey}
                        showsVerticalScrollIndicator={false}
                        selectionColor={Colors.primary}
                        style={{
                          padding: 0,
                          flex: 1,
                          ...Fonts.Medium15Black,
                          textAlign: isRtl ? "right" : "left",
                          overflow: "hidden",
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setRate(false);
                        setRateDescription(null);
                      }}
                      style={{
                        alignSelf: "center",
                        margin: Default.fixPadding * 2,
                      }}
                    >
                      <Text
                        style={{
                          ...Fonts.SemiBold18primary,
                          textAlign: "center",
                        }}
                      >
                        {tr("send")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default HistoryTab;
