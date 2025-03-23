import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors, Default, Fonts } from "../../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useTranslation } from "react-i18next";
import MapView, { Marker } from "react-native-maps";
import MyStatusBar from "../../components/myStatusBar";
import { GOOGLE_API_KEY } from "../../constants/key";
import Geocoder from "react-native-geocoding";
import { useNavigation } from "expo-router";

Geocoder.init(GOOGLE_API_KEY);

const PickAddressScreen = () => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`pickAddressScreen:${key}`);
  }

  const [search, setSearch] = useState();

  const [markerPosition, setMarkerPosition] = useState({
    latitude: 22.616086,
    longitude: 88.4454486,
  });
  const [address, setAddress] = useState("");

  const handleMarkerDrag = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({
      latitude,
      longitude,
    });

    Geocoder.from({
      latitude,
      longitude,
    })
      .then((json) => {
        const addressComponent = json.results[0].formatted_address;
        setAddress(addressComponent);
      })
      .catch((error) => {});
  };

  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
    }, 800);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {mapReady && (
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              margin: Default.fixPadding * 2,
            }}
          >
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Ionicons
                name={isRtl ? "arrow-forward" : "arrow-back"}
                size={25}
                color={Colors.black}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                padding: Default.fixPadding * 1.2,
                marginLeft: isRtl ? 0 : Default.fixPadding * 1.5,
                marginRight: isRtl ? Default.fixPadding * 1.5 : 0,
                borderRadius: 5,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <Ionicons name="search-outline" size={20} color={Colors.grey} />
              <TextInput
                value={search}
                onChangeText={(searchItem) => setSearch(searchItem)}
                placeholder={tr("search")}
                placeholderTextColor={Colors.grey}
                selectionColor={Colors.primary}
                numberOfLines={1}
                style={{
                  padding: 0,
                  ...Fonts.SemiBold16black,
                  flex: 1,
                  textAlign: isRtl ? "right" : "left",
                  marginHorizontal: Default.fixPadding * 0.8,
                }}
              />
            </View>
          </View>
        )}
        {mapReady && (
          <View
            style={{
              zIndex: 1,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              marginHorizontal: Default.fixPadding * 2,
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: "center",
                alignItems: "center",
                padding: Default.fixPadding * 2,
                borderRadius: 10,
                backgroundColor: Colors.white,
                ...Default.shadow,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={15}
                  color={Colors.primary}
                />
              </View>
              <Text
                numberOfLines={3}
                style={{
                  textAlign: isRtl ? "right" : "left",
                  ...Fonts.Medium14Black,
                  marginHorizontal: Default.fixPadding,
                }}
              >
                {address
                  ? address
                  : "3891 Ranchview Dr. Richardson, California 62639, USA"}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
                navigation.navigate("confirm/confirmScreen", {
                  address: address
                    ? address
                    : "3891 Ranchview Dr. Richardson, California 62639, USA",
                });
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: Default.fixPadding * 2,
                padding: Default.fixPadding * 1.2,
                borderRadius: 10,
                backgroundColor: Colors.primary,
              }}
            >
              <Text style={{ ...Fonts.SemiBold18white }}>
                {tr("pickLocation")}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {mapReady && (
          <MapView
            style={{ flex: 1 }}
            onPress={(e) => handleMarkerDrag(e)}
            initialRegion={{
              latitude: markerPosition.latitude,
              longitude: markerPosition.longitude,
              latitudeDelta: 0.058641,
              longitudeDelta: 0.059414,
            }}
            showsUserLocation={true}
            loadingEnabled={true}
            loadingBackgroundColor={"transparent"}
            loadingIndicatorColor={Colors.primary}
          >
            <Marker
              coordinate={markerPosition}
              draggable
              onDragEnd={(e) => handleMarkerDrag(e)}
            >
              <Image
                source={require("../../assets/images/marker.png")}
                style={{ width: 32, height: 37 }}
              />
            </Marker>
          </MapView>
        )}
      </View>
    </View>
  );
};

export default PickAddressScreen;
