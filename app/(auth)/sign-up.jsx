import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => router.push('/sign-in')

    return (
    <SafeAreaView className="bg-black h-full">
        <ScrollView>
            <View className="w-full justify-center items-center h-[85vh] px-4">
                <Image 
                source={images.logo}
                resizeMode='contain'
                className="w-[120px] h-[120px]"
                />

                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in</Text>

                <FormField
                    title="Username"
                    value={form.username}
                    handleChangeText={(a) => setForm({
                        ...form, username: a
                    })}
                    otherStyles="mt-10"
                />
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(a) => setForm({
                        ...form, email: a
                    })}
                    otherStyles="mt-7"
                />
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(b) => setForm({
                        ...form,  password: b
                    })}
                    otherStyles="mt-7"
                />

                <CustomButton
                title="Sign up"
                handlePress={submit}
                containerStyles="w-full mt-7"
                isLoading={isSubmitting}/>

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">
                        Have an account already?
                    </Text>
                    <Link href="/sign-in" className="text-lg font-psemibold text-yellow-400">Sign in</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp