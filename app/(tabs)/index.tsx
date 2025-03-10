import { icons } from "@/constants/icons";
import { ScrollView, Text, View , Image} from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom: 10}}>
        <Image source={icons.logo} className="w-24 h-20 mt-20 mb-5 mx-auto"/>
      </ScrollView>
    </View>
  );
}