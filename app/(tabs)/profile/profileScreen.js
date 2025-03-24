import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";
import DashedLine from "react-native-dashed-line";
import MyStatusBar from "../../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`profileScreen:${key}`);
  }
  const [logOutModel, setLogOutModel] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      <MyStatusBar />
      <View
        style={{
          justifyContent: "center",
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
          {tr("profile")}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            margin: Default.fixPadding * 2,
          }}
        >
          <Image
            source={require("../../../assets/images/profile.png")}
            style={{ height: 66, width: 66, borderRadius: 33 }}
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
              style={{ ...Fonts.SemiBold16black, overflow: "hidden" }}
            >
              Praneeth Perera
            </Text>
            <Text
              numberOfLines={1}
              style={{ ...Fonts.Medium14grey, overflow: "hidden" }}
            >
              praneethperera@example.com
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("editProfile/editProfileScreen")}
          >
            <AntDesign name="edit" size={23} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <DashedLine
          dashLength={2}
          dashThickness={1}
          dashGap={2}
          dashColor={Colors.primary}
        />

        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: Default.fixPadding * 1.2,
            backgroundColor: Colors.extraLightPrimary,
          }}
        >
          <Ionicons name="wallet-outline" size={22} color={Colors.primary} />
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold16primary,
              marginHorizontal: Default.fixPadding * 0.5,
            }}
          >
            {tr("walletAmount")}
            <Text style={{ ...Fonts.SemiBold20primary }}>: $200</Text>
          </Text>
        </View>

        <DashedLine
          dashLength={2}
          dashThickness={1}
          dashGap={2}
          dashColor={Colors.primary}
        />

        <TouchableOpacity
          onPress={() => navigation.push("booking/bookingScreen")}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <Octicons name="checklist" size={20} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("myBooking")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={22}
            color={Colors.black}
          />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("favorites")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <AntDesign name="earth" size={20} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("language")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <AntDesign name="setting" size={22} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("appSettings")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={22}
            color={Colors.black}
          />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("termsCondition")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <MaterialCommunityIcons
            name="message-question-outline"
            size={22}
            color={Colors.black}
          />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("fAQs")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <MaterialIcons name="list-alt" size={22} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("privacyPolicy")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.push("contactUs/contactUsScreen")}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <Octicons name="question" size={20} color={Colors.black} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16black,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("contactUs")}
          </Text>

          <Ionicons
            name={isRtl ? "chevron-back" : "chevron-forward-outline"}
            size={25}
            color={Colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setLogOutModel(true)}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 3,
          }}
        >
          <AntDesign name="logout" size={20} color={Colors.red} />
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold16red,
              marginHorizontal: Default.fixPadding,
            }}
          >
            {tr("logout")}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={logOutModel}
        onRequestClose={() => setLogOutModel(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setLogOutModel(false)}
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
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: width * 0.8,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: Default.fixPadding * 2,
                  marginHorizontal: Default.fixPadding * 2,
                }}
              >
                <AntDesign name="logout" size={35} color={Colors.primary} />
                <Text
                  style={{
                    ...Fonts.SemiBold18primary,
                    marginTop: Default.fixPadding,
                    marginBottom: Default.fixPadding * 1.5,
                  }}
                >
                  {tr("logout")}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    ...Fonts.SemiBold16black,
                    marginBottom: Default.fixPadding,
                    overflow: "hidden",
                  }}
                >
                  {tr("areSure")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
                  marginTop: Default.fixPadding,
                  bottom: -Default.fixPadding * 0.2,
                }}
              >
                <TouchableOpacity
                  onPress={() => setLogOutModel(false)}
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
                    setLogOutModel(false);
                    navigation.push("auth/loginScreen");
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      ...Fonts.SemiBold18white,
                      marginHorizontal: Default.fixPadding * 1.5,
                      textAlign: "center",
                    }}
                  >
                    {tr("yes")}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
