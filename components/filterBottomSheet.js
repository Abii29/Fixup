// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   FlatList,
// } from "react-native";
// import React, { useState } from "react";
// import { Colors, Default, Fonts } from "../constants/styles";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { useTranslation } from "react-i18next";
// import { BottomSheet } from "react-native-btr";

// const { height } = Dimensions.get("window");

// const FilterBottomSheet = (props) => {
//   const { t, i18n } = useTranslation();

//   const isRtl = i18n.dir() == "rtl";

//   function tr(key) {
//     return t(`categoryScreen:${key}`);
//   }

//   const price = [
//     {
//       id: "1",
//       name: tr("highToLow"),
//     },
//     {
//       id: "2",
//       name: tr("lowToHigh"),
//     },
//   ];
//   const [selectedPrice, setSelectedPrice] = useState(tr("highToLow"));

//   const renderItemPrice = ({ item }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => setSelectedPrice(item.name)}
//         style={{
//           marginHorizontal: Default.fixPadding,
//           marginBottom: Default.fixPadding * 2,
//           marginTop: Default.fixPadding * 1.5,
//           paddingVertical: Default.fixPadding * 1.2,
//           paddingHorizontal: Default.fixPadding * 0.5,
//           borderWidth: 1.5,
//           borderColor:
//             selectedPrice === item.name ? Colors.primary : Colors.white,
//           borderRadius: 5,
//           backgroundColor: Colors.white,
//           width: 112,
//           ...Default.shadow,
//         }}
//       >
//         <Text
//           numberOfLines={1}
//           style={{
//             ...(selectedPrice === item.name
//               ? Fonts.SemiBold14primary
//               : Fonts.SemiBold14grey),
//             overflow: "hidden",
//             textAlign: "center",
//           }}
//         >
//           {item.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   const rating = [
//     {
//       id: "1",
//       name: "5",
//     },
//     {
//       id: "2",
//       name: "4",
//     },
//     {
//       id: "3",
//       name: "3",
//     },
//     {
//       id: "4",
//       name: "2",
//     },
//     {
//       id: "5",
//       name: "1",
//     },
//   ];

//   const [selectedRating, setSelectedRating] = useState("5");

//   const renderItemRating = ({ item }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => setSelectedRating(item.name)}
//         style={{
//           flex: 1,
//           flexDirection: isRtl ? "row-reverse" : "row",
//           justifyContent: "center",
//           alignItems: "center",
//           marginHorizontal: Default.fixPadding * 0.75,
//           marginBottom: Default.fixPadding * 2,
//           marginTop: Default.fixPadding * 1.5,
//           paddingVertical: Default.fixPadding * 1.2,
//           paddingHorizontal: Default.fixPadding * 0.5,
//           borderWidth: 1.5,
//           borderColor:
//             selectedRating === item.name ? Colors.primary : Colors.white,
//           borderRadius: 5,
//           backgroundColor: Colors.white,
//           width: 64,
//           ...Default.shadow,
//         }}
//       >
//         <Text
//           style={
//             selectedRating === item.name
//               ? Fonts.SemiBold14primary
//               : Fonts.SemiBold14grey
//           }
//         >
//           {item.name}
//         </Text>
//         <AntDesign
//           name="star"
//           size={15}
//           color={selectedRating === item.name ? Colors.primary : Colors.grey}
//           style={{ marginHorizontal: Default.fixPadding * 0.3 }}
//         />
//       </TouchableOpacity>
//     );
//   };

//   const gender = [
//     {
//       id: "1",
//       name: tr("male"),
//     },
//     {
//       id: "2",
//       name: tr("female"),
//     },
//     {
//       id: "3",
//       name: tr("any"),
//     },
//   ];
//   const [selectedGender, setSelectedGender] = useState(tr("female"));

//   const renderItemGender = ({ item }) => {
//     return (
//       <TouchableOpacity
//         key={item.id}
//         onPress={() => setSelectedGender(item.name)}
//         style={{
//           flex: 1,
//           paddingVertical: Default.fixPadding * 1.1,
//           paddingHorizontal: Default.fixPadding * 0.5,
//           marginHorizontal: Default.fixPadding,
//           marginBottom: Default.fixPadding * 2,
//           marginTop: Default.fixPadding * 1.5,
//           borderWidth: 1.5,
//           borderColor:
//             selectedGender === item.name ? Colors.primary : Colors.white,
//           borderRadius: 5,
//           backgroundColor: Colors.white,
//           width: 112,
//           ...Default.shadow,
//         }}
//       >
//         <Text
//           numberOfLines={1}
//           style={{
//             ...(selectedGender === item.name
//               ? Fonts.SemiBold14primary
//               : Fonts.SemiBold14grey),
//             overflow: "hidden",
//             textAlign: "center",
//           }}
//         >
//           {item.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <BottomSheet
//       visible={props.visible}
//       onBackButtonPress={props.closeFilterBottomSheet}
//       onBackdropPress={props.closeFilterBottomSheet}
//     >
//       <View style={styles.bottomSheetMain}>
//         <Text
//           style={{
//             ...Fonts.SemiBold18black,
//             textAlign: "center",
//             margin: Default.fixPadding,
//           }}
//         >
//           {tr("filters")}
//         </Text>

//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View>
//             <Text
//               style={{
//                 textAlign: isRtl ? "right" : "left",
//                 ...Fonts.SemiBold16black,
//                 marginHorizontal: Default.fixPadding * 2,
//                 marginTop: Default.fixPadding * 1.5,
//               }}
//             >
//               {tr("price")}
//             </Text>

//             <FlatList
//               horizontal
//               inverted={isRtl}
//               data={price}
//               renderItem={renderItemPrice}
//               keyExtractor={(item) => item.id}
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ paddingHorizontal: Default.fixPadding }}
//             />
//           </View>
//           <View
//             style={{
//               borderBottomColor: Colors.lightGrey,
//               borderBottomWidth: 2,
//               marginHorizontal: Default.fixPadding * 2,
//             }}
//           />

//           <Text
//             style={{
//               textAlign: isRtl ? "right" : "left",
//               ...Fonts.SemiBold16black,
//               marginHorizontal: Default.fixPadding * 2,
//               marginTop: Default.fixPadding * 2,
//             }}
//           >
//             {tr("rate")}
//           </Text>

//           <FlatList
//             horizontal
//             inverted={isRtl}
//             data={rating}
//             renderItem={renderItemRating}
//             keyExtractor={(item) => item.id}
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{
//               paddingHorizontal: Default.fixPadding * 1.25,
//             }}
//           />

//           <View
//             style={{
//               marginHorizontal: Default.fixPadding * 2,
//               borderBottomWidth: 2,
//               borderBottomColor: Colors.lightGrey,
//             }}
//           />

//           <Text
//             style={{
//               textAlign: isRtl ? "right" : "left",
//               ...Fonts.SemiBold16black,
//               marginHorizontal: Default.fixPadding * 2,
//               marginTop: Default.fixPadding * 1.5,
//             }}
//           >
//             {tr("gender")}
//           </Text>
//           <FlatList
//             horizontal
//             inverted={isRtl}
//             data={gender}
//             renderItem={renderItemGender}
//             keyExtractor={(item) => item.id}
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{
//               paddingHorizontal: Default.fixPadding,
//             }}
//           />
//         </ScrollView>
//         <TouchableOpacity
//           onPress={props.closeFilterBottomSheet}
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: Default.fixPadding * 2,
//             marginHorizontal: Default.fixPadding * 2,
//             paddingVertical: Default.fixPadding * 1.2,
//             borderRadius: 10,
//             backgroundColor: Colors.primary,
//           }}
//         >
//           <Text style={{ ...Fonts.SemiBold18white }}>{tr("apply")}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={props.closeFilterBottomSheet}
//           style={{ paddingVertical: Default.fixPadding * 1.5 }}
//         >
//           <Text style={{ ...Fonts.SemiBold14primary, textAlign: "center" }}>
//             {tr("reset")}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </BottomSheet>
//   );
// };

// export default FilterBottomSheet;

// const styles = StyleSheet.create({
//   bottomSheetMain: {
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     maxHeight: height / 1.4,
//     backgroundColor: Colors.white,
//     ...Default.shadowWhite,
//   },
// });
