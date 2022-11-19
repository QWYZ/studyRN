import { useLinkTo } from '@react-navigation/native';
import React from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import BannerSwiper from '../../components/Banner/BannerSwiper';
const imageOptions = [
  { uri: 'https://images.alphacoders.com/128/1283924.jpg' },
  { uri: 'https://images4.alphacoders.com/112/1129086.png' },
  { uri: 'https://images2.alphacoders.com/127/1272824.png' }
]

const Login = (props) => {
  const {navigation, route} =  props
  console.log('Login：',props);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <BannerSwiper height={230} images={imageOptions} />

      <View style={{ position: 'absolute', bottom: '20%', width: '100%' }}>
        <Button
          onPress={() => { navigation.navigate('tabHome',{screen:'homePage'}) }}
          title={'登录'}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default Login