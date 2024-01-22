import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const InvisibleButton = () => {
  return (
    <View>
      <TouchableOpacity><Text style={styles.text}>Cancel</Text></TouchableOpacity>
    </View>
  )
}

export default InvisibleButton