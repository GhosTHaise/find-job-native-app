import React from 'react'
import { 
    Text , 
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
 } from 'react-native'
import {Stack , useRouter,useSearchParams} from "expo-router"
import { useCallback,useState } from 'react'

import { 
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn } from '../../components'
import { COLORS,icons,SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data , isLoading,error,refetsch} = useFetch("job-details",{
        job_id : params.id
    });

  return (
    <SafeAreaView 
    style={{
        flex:1,
        backgroundColor : COLORS.lightWhite
    }}
    
    >
       <Stack.Screen
        options={{
            headerTitleAlign : "center",
            headerStyle : {backgroundColor : COLORS.lightWhite},
            headerShadowVisible :  false,
            headerBackVisible : false,
            headerLeft : () => (
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={() => router.back()}
                />
            ),
            headerRight : () => (
                <ScreenHeaderBtn
                    iconUrl={icons.share}
                    dimension="60%"
                />
            ),
            headerTitle : ""
        }}
       >
       </Stack.Screen>

       <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl />}
        >

       </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails