import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-black">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
          <View className="w-full justify-center items-center h-[85vh] px-4">
            <Image 
            source={images.logo}
            className="w-[400px] h-[400px]"
            resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-center text-white">The groundbreaking BlockChain payment platform</Text>
            </View>
            <CustomButton 
            title="Get started!"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style="light" />
    </SafeAreaView>
  );
}