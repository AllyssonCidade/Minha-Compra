import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Overlay from '../Overlay'

function Cam({ onUrlScanned }: string | any) {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  //função para mudar para camera frontal/traseira
  // function toggleCameraFacing() {
  //   setFacing((current) => (current === 'back' ? 'front' : 'back'))
  // }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={({ data }) => {
          onUrlScanned(data)
        }}
      >
        <Overlay />
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    maxHeight: 300,
    justifyContent: 'center'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Cam
