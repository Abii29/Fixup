import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Stars from "react-native-stars";
import { Default, Colors, Fonts } from "../constants/styles";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";

const TopServiceProvidersCard = (props) => {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onClick({ name: props.name })}
      style={{
        flex: 1,
        marginHorizontal: props.marginHorizontal,
        marginBottom: props.marginBottom,
        marginTop: props.marginTop,
        width: props.width,
        borderRadius: 10,
        backgroundColor: Colors.white,
        maxWidth: props.maxWidth,
        ...Default.shadow,
      }}
    >
      <Image
        source={props.img}
        style={{
          width: props.width,
          height: props.height,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />

      <View
        style={{
          alignItems: isRtl ? "flex-end" : "flex-start",
          marginHorizontal: Default.fixPadding * 0.8,
          marginVertical: Default.fixPadding * 0.5,
        }}
      >
        <Text
          numberOfLines={1}
          style={{ ...Fonts.SemiBold15black, overflow: "hidden" }}
        >
          {props.title}
        </Text>
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            marginVertical: Default.fixPadding * 0.2,
          }}
        >
          <Stars
            disabled
            default={props.star}
            count={5}
            half={false}
            starSize={15}
            spacing={3}
            fullStar={<Ionicons name="star" color={Colors.orange} size={15} />}
            emptyStar={<Ionicons name="star" color={Colors.grey} size={15} />}
          />
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.SemiBold14grey,
              overflow: "hidden",
              marginHorizontal: Default.fixPadding * 0.3,
              maxWidth: 50,
            }}
          >
            {props.other}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.Bold16primary,
            overflow: "hidden",
          }}
        >
          {props.dollar}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopServiceProvidersCard;
