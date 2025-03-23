import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Default, Fonts } from "../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Stars from "react-native-stars";

const CategoryCard = (props) => {
  const { i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.onClick({ name: props.cleaner })}
      style={{
        flexDirection: isRtl ? "row-reverse" : "row",
        alignItems: "center",
        marginHorizontal: props.marginHorizontal,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        paddingVertical: Default.fixPadding,
        borderRadius: 10,
        backgroundColor: Colors.white,
        ...Default.shadow,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: Default.fixPadding * 1.5,
        }}
      >
        <Image
          source={props.img}
          style={{ borderRadius: 5, height: 70, width: 70 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: isRtl ? "flex-end" : "flex-start",
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
            justifyContent: "center",
            marginVertical: Default.fixPadding * 0.3,
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
              flex: 1,
              textAlign: isRtl ? "right" : "left",
              overflow: "hidden",
              marginHorizontal: Default.fixPadding * 0.3,
            }}
          >
            {props.other}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={{ ...Fonts.SemiBold14grey, overflow: "hidden" }}
        >
          {props.cleaner}
        </Text>
      </View>

      <View
        style={{
          width: 100,
          marginHorizontal: Default.fixPadding,
          padding: Default.fixPadding * 0.5,
          borderRadius: 5,
          backgroundColor: Colors.primary,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.SemiBold15white,
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {props.dollar}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
