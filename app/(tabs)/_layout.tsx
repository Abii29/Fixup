import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown : false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground>
                            <Image source={icons.home} tintColor="#151312" className="size-6" />
                        </ImageBackground>
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="activities"
            options={{
                title: 'Activities',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground>
                            <Image source={icons.activities} tintColor="#151312" className="size-7" />
                        </ImageBackground>
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{
                title: 'Notifications',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground>
                            <Image source={icons.Notifications} tintColor="#151312" className="size-7" />
                        </ImageBackground>
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground>
                            <Image source={icons.account} tintColor="#151312" className="size-6" />
                        </ImageBackground>
                    </>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout