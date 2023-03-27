import React from 'react'
import { View, Text, Image} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'
const Company = ({companyLogo,jobTitle,companyName,Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>

      </View>
    </View>
  )
}

export default Company