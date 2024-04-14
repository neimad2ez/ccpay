import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  React, { useState, useEffect } from 'react'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import "node-libs-expo/globals";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
import { useSDK } from "@metamask/sdk-react";

const Wallet = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userAddress, setUserAddress] = useState('');
    const { connect, disconnect, account, chainId, ethereum } = useSDK();


    const connectWallet = async () => {
        try {
            await connect();
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    useEffect(() => {
        // Use the 'account' and 'chainId' returned by 'useSDK'
        if (account && chainId) {
            // Handle account and network changes
        }
    }, [account, chainId]);
 
  return (
    <SafeAreaView className="bg-black h-full">
        <ScrollView>
            <FormField
            className="w-full justify-center items-center h-[85vh] px-4"
            title="Wallet URL"
            value={form.walleturl}
            handleChangeText={(a) => setForm({
                ...form, walleturl: a
            })}
            otherStyles="mt-10"
            />

            <CustomButton
            className="min-h-[90px]"
            title="Connect Wallet"
            handlePress={connectWallet}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Wallet