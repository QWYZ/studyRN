import React from 'react'
import { StatusBar, Text, View } from 'react-native'
// import BannerCarousel from '../../components/Banner/BannerCarousel'
import BannerSwiper from '../../components/Banner/BannerSwiper'
// import { BannerCarousel, BannerSwiper } from '../../components/Banner'

const imageOptions = [
  {url:require('../../asset/images/1.jpg')},
  {url:require('../../asset/images/2.jpg')},
  {url:require('../../asset/images/3.jpg')}

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