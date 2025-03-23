import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader";
import MyStatusBar from "../../components/myStatusBar";
import CollapsibleToolbar from "react-native-collapsible-toolbar";
import { useNavigation } from "expo-router";

const ContactUsScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`contactUsScreen:${key}`);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [sendLoader, setSendLoader] = useState(false);

  const handleSend = () => {
    setSendLoader(true);
    setTimeout(() => {
      setSendLoader(false);
      navigation.pop();
    }, 800);
  };

  const renderContent = () => {
    return (
      <View>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding * 3,
            marginBottom: Default.fixPadding,
          }}
        >
          {tr("name")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 2,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={name}
            onChangeText={setName}
            selectionColor={Colors.primary}
            placeholder={tr("enterName")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              flex: 1,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
              paddingVertical: Default.fixPadding * 1.2,
              paddingHorizontal: Default.fixPadding * 1.5,
            }}
          />
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding,
          }}
        >
          {tr("emailId")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 2,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={email}
            onChangeText={setEmail}
            selectionColor={Colors.primary}
            placeholder={tr("enterEmail")}
            keyboardType="email-address"
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              flex: 1,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
              paddingVertical: Default.fixPadding * 1.2,
              paddingHorizontal: Default.fixPadding * 1.5,
            }}
          />
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding,
          }}
        >
          {tr("message")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginBottom: Default.fixPadding * 2,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={message}
            onChangeText={setMessage}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={8}
            selectionColor={Colors.primary}
            placeholder={tr("writeMessage")}
            placeholderTextColor={Colors.grey}
            style={{
              padding: 0,
              flex: 1,
              height: 165,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
              paddingVertical: Default.fixPadding * 1.2,
              paddingHorizontal: Default.fixPadding * 1.5,
            }}
          />
        </View>
      </View>
    );
  };

  const renderNavBar = () => {
    return (
      <View
        style={{
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
          paddingHorizontal: Default.fixPadding * 2,
          paddingVertical: Platform.OS === "ios" ? 0 : Default.fixPadding * 1.2,
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
          {tr("contactUs")}
        </Text>
      </View>
    );
  };

  const renderToolBar = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 270,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/contactImg.png")}
            style={{
              height: 142,
              width: 178,
              resizeMode: "contain",
              marginTop: Default.fixPadding * 5,
              marginBottom: Default.fixPadding,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            marginHorizontal: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginHorizontal: Default.fixPadding,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Ionicons name="mail-outline" size={22} color={Colors.primary} />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: isRtl ? "flex-end" : "flex-start",
                marginLeft: isRtl ? 0 : Default.fixPadding,
                marginRight: isRtl ? Default.fixPadding : 0,
              }}
            >
              <Text style={{ ...Fonts.Medium16white }}>{tr("email")}</Text>
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Medium14white, overflow: "hidden" }}
              >
                felicia@example.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginHorizontal: Default.fixPadding,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Ionicons name="call-outline" size={22} color={Colors.primary} />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: isRtl ? "flex-end" : "flex-start",
                marginLeft: isRtl ? 0 : Default.fixPadding,
                marginRight: isRtl ? Default.fixPadding : 0,
              }}
            >
              <Text style={{ ...Fonts.Medium16white }}> {tr("phone")}</Text>
              <Text
                numberOfLines={1}
                style={{ ...Fonts.Medium14white, overflow: "hidden" }}
              >
                (704) 555-0127
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.extraLightGrey }}>
      {Platform.OS === "ios" ? (
        <MyStatusBar />
      ) : (
        <StatusBar
          translucent={false}
          backgroundColor={Colors.primary}
          barStyle={"light-content"}
        />
      )}

      <CollapsibleToolbar
        renderContent={renderContent}
        renderNavBar={renderNavBar}
        renderToolBar={renderToolBar}
        collapsedNavBarBackgroundColor={Colors.primary}
        toolBarHeight={270}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        bounces={false}
      />

      <Loader visible={sendLoader} />
      <TouchableOpacity
        onPress={handleSend}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: Default.fixPadding * 1.2,
          margin: Default.fixPadding * 2,
          borderRadius: 10,
          backgroundColor: Colors.primary,
        }}
      >
        <Text style={{ ...Fonts.SemiBold18white }}>{tr("send")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUsScreen;
