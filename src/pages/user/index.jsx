
import { useLinkTo } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import BannerSwiper from '../../components/Banner/BannerSwiper';
import { styles } from './styles'

const imageOptions = [
  { uri: 'https://images.alphacoders.com/128/1283924.jpg' },
  { uri: 'https://images4.alphacoders.com/112/1129086.png' },
  { uri: 'https://images2.alphacoders.com/127/1272824.png' }
]
const User = () => {
  const linkTo = useLinkTo();
  return (
    <View style={styles.container}>
      <BannerSwiper height={220} images={imageOptions} />

      <Text>User</Text>
      <View style={{position:'absolute',bottom:'20%',width:'100%'}}>
      <Button
        onPress={()=>{linkTo('/login')}}
        title={'去登录'}
      />
      </View>
    </View>
  )
}

export default User