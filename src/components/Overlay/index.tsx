import React from 'react'
import { View, StyleSheet } from 'react-native'

const Overlay = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.center}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    zIndex: 12,
    height: 170,
    width: 170,
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    borderRadius: 20
  }
})

export default Overlay
