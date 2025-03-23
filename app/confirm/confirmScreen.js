import {Text,View,ScrollView,TouchableOpacity,Image,Dimensions,FlatList,TextInput,Modal,StyleSheet,TouchableWithoutFeedback,} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import MyStatusBar from "../../components/myStatusBar";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Calendar } from "react-native-calendars";
import { useLocalSearchParams, useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const ConfirmScreen = () => {
  const navigation = useNavigation();

  const { address } = useLocalSearchParams();
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`confirmScreen:${key}`);
  }

  const optionClean = [
    {
      id: "1",
      name: ("fullHome"),
    },
    {
      id: "2",
      name: tr("kitchen"),
    },
    {
      id: "3",
      name: tr("bathroom"),
    },
    {
      id: "4",
      name: tr("parking"),
    },
    {
      id: "5",
      name: tr("bedroom"),
    },
    {
      id: "6",
      name: tr("garden"),
    },
    {
      id: "7",
      name: tr("livingRoom"),
    },
    {
      id: "8",
      name: tr("roof"),
    },
  ];
  const [selectedClean, setSelectedClean] = useState(tr("fullHome"));

  const renderItemClean = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedClean(item.name)}
        style={{
          paddingVertical: Default.fixPadding * 0.5,
          paddingHorizontal: Default.fixPadding,
          marginHorizontal: Default.fixPadding * 0.75,
          marginTop: Default.fixPadding,
          marginBottom: Default.fixPadding * 2,
          borderWidth: 1.5,
          borderColor:
            selectedClean === item.name ? Colors.primary : Colors.white,
          borderRadius: 5,
          backgroundColor:
            selectedClean === item.name ? Colors.lightPrimary : Colors.white,
          ...Default.shadow,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            ...(selectedClean === item.name
              ? Fonts.SemiBold14primary
              : Fonts.SemiBold14grey),
            overflow: "hidden",
            textAlign: "center",
            maxWidth: 90,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const [size, setSize] = useState([1700]);

  const onValuesChangeSize = (values) => {
    setSize(values);
  };

  const today = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(today);
  const [calendarModal, setCalendarModel] = useState(false);

  const onDayPress = (day) => {
    setDate(day.dateString);
    setCalendarModel(false);
  };

  const [timeModal, setTimeModal] = useState(false);
  const [time, setTime] = useState(new Date());

  const onTimeSelected = (_, value) => {
    setTimeModal(false);
    setTime(value);
  };

  const confirmTime = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const [numberRoom, setNumberRoom] = useState(0);

  const numberOfRoomDecrement = () => {
    if (numberRoom > 0) {
      setNumberRoom(numberRoom - 1);
    }
  };

  const numberIncrement = () => {
    if (numberRoom < 10) {
      setNumberRoom(numberRoom + 1);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          backgroundColor: Colors.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: isRtl ? "flex-end" : "flex-start",
            paddingHorizontal: Default.fixPadding * 2,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ marginTop: Default.fixPadding }}
          >
            <Ionicons
              name={isRtl ? "arrow-forward" : "arrow-back"}
              size={25}
              color={Colors.white}
            />
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold16white,
              overflow: "hidden",
              marginTop: Default.fixPadding * 1.5,
            }}
          >
            Praneeth Perera
          </Text>
          <View
            style={{
              alignItems: "flex-start",
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
              emptyStar={<Ionicons name="star" color={Colors.grey} size={15} />}
            />
          </View>
          <Text
            numberOfLines={1}
            style={{ ...Fonts.SemiBold16white, overflow: "hidden" }}
          >
            600.00 Rs/hr
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Default.fixPadding * 0.5,
          }}
        >
          <Image
            source={require("../../assets/images/confirm.png")}
            style={{ height: 143, width: 134 }}
            resizeMode={"contain"}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.SemiBold16black,
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding * 1.5,
          }}
        >
          {tr("question")}
        </Text>
        <FlatList
          horizontal
          inverted={isRtl}
          data={optionClean}
          renderItem={renderItemClean}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: Default.fixPadding * 1.25,
          }}
        />
        
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...Fonts.SemiBold16black,
                textAlign: isRtl ? "right" : "left",
              }}
            >
              {tr("selectDate")}
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCalendarModel(true)}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: Default.fixPadding * 1.2,
                paddingHorizontal: Default.fixPadding * 0.8,
                marginVertical: Default.fixPadding,
                marginRight: isRtl ? 0 : Default.fixPadding * 2,
                marginLeft: isRtl ? Default.fixPadding * 2 : 0,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.SemiBold14black,
                    textAlign: isRtl ? "right" : "left",
                    overflow: "hidden",
                  }}
                >
                  {date}
                </Text>
              </View>

              <Octicons name="calendar" size={18} color={Colors.grey} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...Fonts.SemiBold16black,
                textAlign: isRtl ? "right" : "left",
              }}
            >
              {tr("selectTime")}
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setTimeModal(true)}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: Default.fixPadding * 1.2,
                paddingHorizontal: Default.fixPadding * 0.8,
                marginVertical: Default.fixPadding,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.SemiBold14black,
                    overflow: "hidden",
                    textAlign: isRtl ? "right" : "left",
                  }}
                >
                  {confirmTime(time)}
                </Text>
              </View>

              <MaterialIcons name="access-time" size={20} color={Colors.grey} />
            </TouchableOpacity>
          </View>
        </View>
        {timeModal && (
          <DateTimePicker
            value={time}
            mode={"time"}
            onChange={onTimeSelected}
            accentColor={Colors.primary}
          />
        )}
        
        <View style={{ marginHorizontal: Default.fixPadding * 2 }}>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("phoneNumber")}
          </Text>
          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              paddingVertical: Default.fixPadding * 1.3,
              paddingHorizontal: Default.fixPadding,
              marginBottom: Default.fixPadding * 2,
              marginTop: Default.fixPadding,
              borderRadius: 10,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder={tr("enterNumber")}
              placeholderTextColor={Colors.grey}
              selectionColor={Colors.primary}
              keyboardType={"number-pad"}
              numberOfLines={1}
              style={{
                padding: 0,
                flex: 1,
                ...Fonts.SemiBold14black,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            />
          </View>
        </View>
        
        <View style={{ marginHorizontal: Default.fixPadding * 2 }}>
          <Text
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
            }}
          >
            {tr("location")}
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push("pickAddress/pickAddressScreen")}
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              padding: Default.fixPadding,
              marginVertical: Default.fixPadding,
              borderRadius: 10,
              backgroundColor: Colors.white,
              ...Default.shadow,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: isRtl ? "flex-end" : "flex-start",
              }}
            >
              <Text
                numberOfLines={3}
                style={{
                  ...(address ? Fonts.SemiBold14black : Fonts.SemiBold14grey),
                  overflow: "hidden",
                  textAlign: isRtl ? "right" : "left",
                }}
              >
                {address
                  ? address
                  : "IIT City Office, Bambalapitiya, Colombo 04"}
              </Text>
            </View>
            <SimpleLineIcons
              name="location-pin"
              size={18}
              color={Colors.grey}
            />
          </TouchableOpacity>
        </View>
        
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.push("paymentMethod/paymentMethodScreen")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: Default.fixPadding * 2,
          padding: Default.fixPadding * 1.2,
          borderRadius: 10,
          backgroundColor: Colors.primary,
        }}
      >
        <Text
          numberOfLines={1}
          style={{ ...Fonts.SemiBold18white, overflow: "hidden" }}
        >
          {tr("confirm")} {`(${tr("totalPay")} Rs 600.00)`}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={calendarModal}
        onRequestClose={() => setCalendarModel(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setCalendarModel(false)}
          style={{ flex: 1 }}
        >
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
                        marginTop: Default.fixPadding,
                      }}
                    >
                      {tr("selectDate")}
                    </Text>

                    <TouchableOpacity
                      onPress={() => setCalendarModel(false)}
                      style={{
                        position: "absolute",
                        alignSelf: isRtl ? "flex-start" : "flex-end",
                        padding: Default.fixPadding * 0.5,
                      }}
                    >
                      <Ionicons name="close" size={25} color={Colors.grey} />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Calendar
                      style={{ width: width * 0.85 }}
                      minDate={today}
                      current={date}
                      firstDay={1}
                      hideExtraDays={true}
                      renderArrow={(direction) =>
                        direction == "left" ? (
                          <MaterialIcons
                            name="arrow-back-ios"
                            color={Colors.grey}
                            size={18}
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-forward-ios"
                            color={Colors.grey}
                            size={18}
                          />
                        )
                      }
                      theme={{
                        backgroundColor: Colors.white,
                        calendarBackground: Colors.white,
                        textSectionTitleColor: Colors.black,
                        selectedDayTextColor: Colors.white,
                        todayTextColor: Colors.black,
                        dayTextColor: Colors.black,
                        textDisabledColor: Colors.grey,
                        textMonthFontFamily: "SemiBold",
                        textDayHeaderFontFamily: "SemiBold",
                        textDayFontFamily: "SemiBold",
                        monthTextColor: Colors.black,
                      }}
                      onDayPress={onDayPress}
                      markedDates={{
                        [date]: {
                          selected: true,
                          selectedColor: Colors.primary,
                        },
                      }}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ConfirmScreen;
const styles = StyleSheet.create({
  markerStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.white,
    ...Default.shadow,
  },
  customLabelStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
