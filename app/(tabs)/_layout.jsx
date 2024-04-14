<<<<<<< HEAD
import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'

import { icons } from '../../constants';

const TabIcon = (icon, color, name, focused) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
            source={icon}
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout
=======
import { StyleSheet, Text, View } from 'react-native'
import {Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import './global.css';
import { Entypo } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs   screenOptions={{ tabBarActiveTintColor: 'gold', tabBarStyle:{height: 60,  backgroundColor : 'black'} }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Entypo size={28} name="wallet" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'setting',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false
        }}
      />
      
    </Tabs>
  )
}

export default _layout

>>>>>>> 73f8c52dcc1d0cf9bae188aa167aafef2f9dd666
