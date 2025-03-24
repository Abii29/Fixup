import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";
import { BottomSheet } from "react-native-btr";
import SnackbarToast from "../../components/snackbarToast";
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`editProfileScreen:${key}`);
  }

  const [update, setUpdate] = useState(false);

  const [name, onChangeName] = useState("Praneeth Perera");
  const [email, onChangeTextEmail] = useState("praneeth.20231203@iit.ac.lk");
  const [number, onChangeTextNumber] = useState("071 429 2156");

  const [uploadImage, setUploadImage] = useState(false);
  const toggleCloseUploadImage = () => {
    setUploadImage(!uploadImage);
  };

  const [removeImageToast, setRemoveImageToast] = useState(false);
  const onToggleSnackBarRemoveImage = () => setRemoveImageToast(false);

  const [pickedImage, setPickedImage] = useState();
  const [removeImage, setRemoveImage] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      toggleCloseUploadImage();
    }
  };

  const [cameraNotGranted, setCameraNotGranted] = useState(false);
  const onDismissCameraNotGranted = () => setCameraNotGranted(false);

  const cameraHandler = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      setCameraNotGranted(true);
      return;
    }
    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      toggleCloseUploadImage();
    }
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
          {tr("editProfile")}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginVertical: Default.fixPadding * 3,
          }}
        >
          {!pickedImage ? (
            <View>
              {removeImage ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 148,
                    width: 148,
                    borderRadius: 74,
                    backgroundColor: Colors.lightGrey,
                  }}
                >
                  <Ionicons name="person" size={45} color={Colors.white} />
                </View>
              ) : (
                <Image
                  source={require("../../assets/images/profile.png")}
                  style={{ height: 148, width: 148, borderRadius: 74 }}
                />
              )}
            </View>
          ) : (
            <Image
              style={{
                height: 148,
                width: 148,
                borderRadius: 74,
              }}
              source={{ uri: pickedImage }}
            />
          )}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: isRtl ? 5 : null,
              right: isRtl ? null : 5,
            }}
          >
            <TouchableOpacity
              onPress={() => toggleCloseUploadImage()}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.white,
                backgroundColor: Colors.primary,
              }}
            >
              <Ionicons
                style={{ color: Colors.white }}
                name="camera-outline"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding * 3,
          }}
        >
          {tr("name")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
            padding: Default.fixPadding * 1.5,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={name}
            onChangeText={onChangeName}
            selectionColor={Colors.primary}
            placeholder={tr("enterName")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              flex: 1,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>

        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("email")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
            padding: Default.fixPadding * 1.5,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={email}
            onChangeText={onChangeTextEmail}
            selectionColor={Colors.primary}
            keyboardType="email-address"
            placeholder={tr("enterEmail")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              flex: 1,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>
        <Text
          style={{
            textAlign: isRtl ? "right" : "left",
            ...Fonts.Medium14Black,
            marginHorizontal: Default.fixPadding * 2,
          }}
        >
          {tr("mobile")}
        </Text>
        <View
          style={{
            marginHorizontal: Default.fixPadding * 2,
            marginTop: Default.fixPadding,
            marginBottom: Default.fixPadding * 2,
            padding: Default.fixPadding * 1.5,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <TextInput
            value={number}
            onChangeText={onChangeTextNumber}
            selectionColor={Colors.primary}
            keyboardType={"phone-pad"}
            placeholder={tr("enterMobile")}
            placeholderTextColor={Colors.grey}
            numberOfLines={1}
            style={{
              padding: 0,
              flex: 1,
              ...Fonts.Medium15Black,
              textAlign: isRtl ? "right" : "left",
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setUpdate(true)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: Default.fixPadding * 2,
          paddingVertical: Default.fixPadding * 1.2,
          borderRadius: 10,
          backgroundColor: Colors.primary,
        }}
      >
        <Text style={{ ...Fonts.SemiBold18white }}>{tr("update")}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={update}
        onRequestClose={() => setUpdate(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setUpdate(false)}
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
                justifyContent: "center",
                alignItems: "center",
                width: width * 0.8,
                padding: Default.fixPadding * 1.5,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Text
                style={{
                  ...Fonts.SemiBold16black,
                  marginVertical: Default.fixPadding * 1.5,
                }}
              >
                {tr("successfully")}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setUpdate(false);
                  navigation.pop();
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  paddingHorizontal: Default.fixPadding * 9,
                  paddingVertical: Default.fixPadding,
                  marginVertical: Default.fixPadding,
                  borderRadius: 10,
                  backgroundColor: Colors.primary,
                }}
              >
                <Text
                  style={{
                    ...Fonts.Bold18white,
                  }}
                >
                  {tr("ok")}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <BottomSheet
        visible={uploadImage}
        onBackButtonPress={toggleCloseUploadImage}
        onBackdropPress={toggleCloseUploadImage}
      >
        <View style={styles.bottomSheetMain}>
          <Text
            numberOfLines={1}
            style={{
              textAlign: isRtl ? "right" : "left",
              ...Fonts.SemiBold18black,
              overflow: "hidden",
              marginVertical: Default.fixPadding,
              marginHorizontal: Default.fixPadding * 2,
            }}
          >
            {tr("changeProfile")}
          </Text>
          <View
            style={{
              marginHorizontal: Default.fixPadding * 2,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={cameraHandler}
              style={{
                alignItems: "center",
                flexDirection: isRtl ? "row-reverse" : "row",
                marginBottom: Default.fixPadding * 1.5,
              }}
            >
              <View style={[Default.shadow, styles.round]}>
                <Ionicons name="camera" size={25} color={Colors.blue} />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Medium16Black,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                {tr("camera")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={pickImage}
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                marginBottom: Default.fixPadding * 1.5,
              }}
            >
              <View style={[Default.shadow, styles.round]}>
                <Ionicons name="image" size={25} color={Colors.green} />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Medium16Black,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                {tr("gallery")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                toggleCloseUploadImage();
                setRemoveImageToast(!removeImageToast);
                setRemoveImage(true);
                setPickedImage(null);
              }}
              style={{
                alignItems: "center",
                flexDirection: isRtl ? "row-reverse" : "row",
                marginBottom: Default.fixPadding * 1.5,
              }}
            >
              <View style={[Default.shadow, styles.round]}>
                <Ionicons name="trash" size={25} color={Colors.red} />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Medium16Black,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                {tr("remove")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <SnackbarToast
          visible={cameraNotGranted}
          onDismiss={onDismissCameraNotGranted}
          title={tr("deny")}
        />
      </BottomSheet>
      <SnackbarToast
        visible={removeImageToast}
        onDismiss={onToggleSnackBarRemoveImage}
        title={tr("removeImage")}
      />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  bottomSheetMain: {
    paddingVertical: Default.fixPadding,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.white,
  },
  round: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    borderRadius: 23,
    backgroundColor: Colors.white,
  },
});
