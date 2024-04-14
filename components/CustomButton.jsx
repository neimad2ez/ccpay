import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native';
import React, {useState} from 'react'



const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {


    return (
        <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-yellow-400 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}>
        <Text className={`text-black ${textStyles} text-2xl`}>
            {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton