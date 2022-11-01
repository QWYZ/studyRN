import React from 'react'
import { StatusBar, Text, View } from 'react-native'
// import BannerCarousel from '../../components/Banner/BannerCarousel'
import BannerSwiper from '../../components/Banner/BannerSwiper'
// import { BannerCarousel, BannerSwiper } from '../../components/Banner'

const imageOptions = [
  {uri:'https://images.alphacoders.com/128/1283924.jpg'},
  {uri:'https://images4.alphacoders.com/112/1129086.png'},
  {uri:'https://images2.alphacoders.com/127/1272824.png'}
]

const Home = () => {



  return (
    <View style={{height:200}}>
      <BannerSwiper images={imageOptions} />
      <Text>Home</Text>
      {/* <BannerCarousel images={imageOptions} /> */}
    </View>
  )
}

export default Home