import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../constants/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { useTranslation } from "react-i18next";
import SnackbarToast from "./snackbarToast";

const { width } = Dimensions.get("window");

const OngoingTab = () => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`ongoingTab:${key}`);
  }
  const [cancelModal, setCancelModal] = useState(false);

  const [cancelToast, setCancelToast] = useState(false);
  const onDismissCancelToast = () => setCancelToast(false);

  const ongoingList = [
    {
      key: "1",
      name: "Guy Hawkins",
      image: require("../assets/images/booking1.png"),
      other: "Oct 20,2022 at 10.00am",
      title: "Cleaner",
    },
    {
      key: "2",
      name: "Jenny Wilson",
      image: require("../assets/images/booking2.png"),
      other: "Oct 22,2022 at 10.00am",
      title: "Plumber",
    },
    {
      key: "3",
      name: "Jacob Jones",
      image: require("../assets/images/booking3.png"),
      other: "Oct 21,2022 at 10.00am",
      title: "Laundry",
    },
    {
      key: "4",
      name: "Robert Fox",
      image: require("../assets/images/booking4.png"),
      other: "Oct 24,2022 at 11.00am",
      title: "Painting",
    },
  ];

  const [ongoingItem, setOngoingItem] = useState(ongoingList);
  const [selectedId, setSelectedId] = useState();

  const deleteItem = () => {
    const copyList = ongoingItem;
    const newList = copyList.filter((item) => item.key !== selectedId);
    setOngoingItem(newList);
  };

  const renderItem = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <View
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
              marginVertical: Default.fixPadding * 0.4,
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
          onPress={() => {
            setCancelModal(true);
            setSelectedId(item.key);
          }}
          style={{
            padding: Default.fixPadding * 0.5,
            width: 71,
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
            {tr("cancel")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      {ongoingItem.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="text-box-search-outline"
            size={48}
            color={Colors.primary}
          />
          <Text
            style={{
              ...Fonts.SemiBold15primary,
              marginTop: Default.fixPadding * 2,
              textAlign: "center",
            }}
          >
            {tr("noBooking")}
          </Text>
        </View>
      ) : (
        <FlatList
          data={ongoingItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={cancelModal}
        onRequestClose={() => setCancelModal(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setCancelModal(false)}
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
                justifyContent: "center",
                width: width * 0.8,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <TouchableWithoutFeedback>
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: Default.fixPadding * 2,
                    }}
                  >
                    <Feather
                      name="alert-triangle"
                      size={35}
                      color={Colors.primary}
                    />
                    <Text
                      style={{
                        ...Fonts.SemiBold18primary,
                        marginTop: Default.fixPadding,
                      }}
                    >
                      {tr("cancelBooking")}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{
                        ...Fonts.SemiBold15black,
                        textAlign: "center",
                        overflow: "hidden",
                        maxWidth: "90%",
                        marginTop: Default.fixPadding * 2,
                      }}
                    >
                      {tr("areSure")}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: isRtl ? "row-reverse" : "row",
                      marginTop: Default.fixPadding * 2,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setCancelModal(false)}
                      style={{
                        flex: 1,
                        paddingVertical: Default.fixPadding * 1.2,
                        borderBottomLeftRadius: isRtl ? 0 : 10,
                        borderBottomRightRadius: isRtl ? 10 : 0,
                        backgroundColor: Colors.white,
                        ...Default.shadow,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          ...Fonts.SemiBold18black,
                          textAlign: "center",
                        }}
                      >
                        {tr("no")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        paddingVertical: Default.fixPadding * 1.2,
                        borderBottomRightRadius: isRtl ? 0 : 10,
                        borderBottomLeftRadius: isRtl ? 10 : 0,
                        backgroundColor: Colors.primary,
                        ...Default.shadow,
                      }}
                      onPress={() => {
                        deleteItem();
                        setCancelModal(false);
                        setCancelToast(true);
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          ...Fonts.SemiBold18white,
                          textAlign: "center",
                          marginHorizontal: Default.fixPadding * 1.5,
                        }}
                      >
                        {tr("yes")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <SnackbarToast
        title={tr("removeSuccess")}
        visible={cancelToast}
        onDismiss={onDismissCancelToast}
      />
    </SafeAreaView>
  );
};

export default OngoingTab;
