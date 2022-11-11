import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
// import BannerCarousel from '../../components/Banner/BannerCarousel'
import BannerSwiper from '../../components/Banner/BannerSwiper';
import { getRandomImage } from '../../service/home';
import { getStorageData } from '../../utils/storage';
import { ArrayBufferToBase64 } from '../../utils/utils';
import deviceInfo from '../../utils/deviceInfo';
import theme from '../../asset/theme/theme1';
// import { BannerCarousel, BannerSwiper } from '../../components/Banner'

const imageOptions = [
  { uri: 'https://images.alphacoders.com/128/1283924.jpg' },
  { uri: 'https://images4.alphacoders.com/112/1129086.png' },
  { uri: 'https://images2.alphacoders.com/127/1272824.png' }
]

const Home = (props) => {
  // console.log('home:',props);
  const [randomImage, setRandomImage] = useState(); //随机图片
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getImage();
    // const token = await getStorageData('token');
    // const res = await getSomeData();
    // console.log('token2:',token);
  }, [])

  const getImage = async () => {
    // const token = await getStorageData('token');
    const res = await getRandomImage({ type: 'pe' });
    const img = ArrayBufferToBase64(res.data);
    // console.log(img);
    setRandomImage(img);
    setRefreshing(false);
  }
  const renderMain = () =>{

    return(
        <View style={{width:deviceInfo.width,height:deviceInfo.height-220}}>
            <Image style={{width: '100%', height:'100%'}} resizeMode={'cover'} source={{uri:randomImage}} />
        </View>
    )
  }

  //  let token = await getStorageData('token');
  console.log('token2:', deviceInfo.width);
  return (
    <View style={styles.container}>
      <BannerSwiper height={220} images={imageOptions} />

      <FlatList
          // flatlist只能包裹水平滚动的scrollview
          data={[{ id: 'home' }]}
          renderItem={renderMain}
          // renderItem={this.renderMain}
          keyExtractor={(item) => item.id}
          // 一定要有onRefresh事件才可以触发refreshing加载动画
          refreshing={refreshing}
          // flatlist的下拉刷新在ios需要手动控制refreshing状态的改变
          onRefresh={() => {
            setRefreshing(true);
            getImage()
          }}
          showsVerticalScrollIndicator={false} // 隐藏垂直滚动条
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
})

export default Home