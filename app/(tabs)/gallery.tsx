import { View, Text } from 'react-native';

export default function GalleryScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#FFFDD0]">
      <Text className="text-2xl font-bold text-[#001F3F]">Gallery</Text>
      <Text className="mt-4 text-lg text-[#5D4037]">Your captured photos will appear here.</Text>
    </View>
  );
}
