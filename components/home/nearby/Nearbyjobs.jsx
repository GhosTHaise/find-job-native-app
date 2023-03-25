
import { 
  View, 
  Text, 
  TouchableOpacity,
  ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS, } from '../../../constants'
import NearByJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();

  const {data,isLoading,error} = useFetch("search",{
      query : "laravel developer",
      num_pages : 1
  });
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerTitle}>
          Nearby jobs
        </Text>
        <TouchableOpacity>
            <Text style={styles.headerBtn}>
                Show all
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
          {
            isLoading ? (
              <ActivityIndicator size={"large"} colors={COLORS.primary} />
            ) : error ? (
              <Text>Something went wrong</Text>
            ) : (
              data?.map((job)=>(
                <NearByJobCard 
                  job={job}
                  key={`nearby-job-${job?.job_id}`}
                  handleNavigate={()=>router.back(`/job-details/${job.jpb_id}`)}
                />
              ))
            )
          }
      </View>
    </View>
  )
}

export default Nearbyjobs