import React from "react";
import { Modal, Text, View, Dimensions, ActivityIndicator } from "react-native";
import { Colors, Default, Fonts } from "../constants/styles";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const Loader = (props) => {
  const { t } = useTranslation();

  function tr(key) {
    return t(`loader:${key}`);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
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
            alignItems: "center",
            width: width * 0.85,
            height: 150,
            borderRadius: 10,
            backgroundColor: Colors.white,
            ...Default.shadow,
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.primary} />
          <Text
            style={{
              ...Fonts.SemiBold16primary,
              marginTop: Default.fixPadding,
            }}
          >
            {tr("pleaseWait")}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
export default Loader;
