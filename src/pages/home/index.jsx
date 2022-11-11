import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
// import BannerCarousel from '../../components/Banner/BannerCarousel'
import BannerSwiper from '../../components/Banner/BannerSwiper';
import { getRandomImage } from '../../service/home';
import { getStorageData } from '../../utils/storage';
// import { BannerCarousel, BannerSwiper } from '../../components/Banner'

const imageOptions = [
  {uri:'https://images.alphacoders.com/128/1283924.jpg'},
  {uri:'https://images4.alphacoders.com/112/1129086.png'},
  {uri:'https://images2.alphacoders.com/127/1272824.png'}
]

const Home = (props) => {
  console.log('home:',props);
  useEffect(()=>{
    getToken();
    // const token = await getStorageData('token');
    // const res = await getSomeData();
    // console.log('token2:',token);
  },[])

  const getToken = async() =>{
    // const token = await getStorageData('token');
    const res = await getRandomImage({type:'pe'});
    console.log('token2:',res);
  }

  //  let token = await getStorageData('token');
  //  console.log('token2:',token);
  return (
    <View>
      <BannerSwiper height={220} images={imageOptions} />
      <Text>Home</Text>
    </View>
  )
}

export default Home