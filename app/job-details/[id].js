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
    ScreenHeaderBtn, 
    Specifics} from '../../components'
import { COLORS,icons,SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const tabs = ["About","Qualifications","Responsabilities"]

const JobDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data , isLoading,error,refetch} = useFetch("job-details",{
        job_id : params.id
    });

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    
    const onRefresh = () => {}

    const displayTabContent = () => {
        switch(activeTab){
            case tabs[1]:
                return <Specifics 
                    title={tabs[1]}
                    points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                />
                break;
            case tabs[0]:
                return <JobAbout
                    info={data[0].job_description ?? "No data provided"}
                />
                break;
            case tabs[2]:
                return <Specifics 
                title={tabs[2]}
                points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
            />
                break;    
            default:
                break;    
        }
    }
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
        refreshControl=
        {<RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            />
    }
        >
        {
            isLoading ? (
                <ActivityIndicator 
                    size={"large"} 
                    color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : data.length ==0 ? (
                <Text>No data</Text>
            ) : (
                <View style={{
                        padding : SIZES.medium,
                        paddingBottom : 100
                    }}>
                    <Company 
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyName={data[0].employer_name}
                        Location={data[0].job_country}
                    />
                    <JobTabs
                        tabs={tabs}
                        activeTab={activeTab}    
                        setActiveTab={setActiveTab}
                    />

                    {displayTabContent()}
                </View>
            )
        }
       </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails