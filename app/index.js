import { useState } from "react";
import { View , ScrollView,SafeAreaView, Text } from "react-native";
import { Stack,useRouter } from "expo-router";

import {COLORS,icons,images,SIZES} from "../constants"
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "../components"
import { StatusBar } from "expo-status-bar";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{
                flex : 1,
                backgroundColor : COLORS.lightWhite
            }}>
            <StatusBar hidden />
            <Stack.Screen
                options={{
                    headerStyle : { backgroundColor : COLORS.lightWhite},
                    headerShadowVisible : false,
                    headerLeft : () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight : () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle : ""
                }}
            >
                Home
            </Stack.Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex : 1,
                    padding : SIZES.medium
                }}>
                        <Welcome

                        />
                        <Popularjobs />
                        <Nearbyjobs />
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}

export default Home;