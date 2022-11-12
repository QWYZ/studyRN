import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import BannerCarousel from '../../components/Banner/BannerCarousel'
import BannerSwiper from '../../components/Banner/BannerSwiper';
import { getRandomImage } from '../../service/home';
import { getStorageData } from '../../utils/storage';
import { ArrayBufferToBase64 } from '../../utils/utils';
import deviceInfo from '../../utils/deviceInfo';
import theme from '../../asset/theme/theme1';
import { Actionsheet, Button, Center, Icon } from 'native-base';
import { Path } from 'react-native-svg';
// import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionsModal from '../../components/ActionsModal';

// import { BannerCarousel, BannerSwiper } from '../../components/Banner'

const imageOptions = [
  { uri: 'https://images.alphacoders.com/128/1283924.jpg' },
  { uri: 'https://images4.alphacoders.com/112/1129086.png' },
  { uri: 'https://images2.alphacoders.com/127/1272824.png' }
]



const Home = (props) => {
  const [randomImage, setRandomImage] = useState(); //随机图片
  const [refreshing, setRefreshing] = useState(false);//下拉刷新状态
  const [visible, setVisible] = useState(false);//

  const actionOption = [
    {
      key:'download',
      name:'下载',
      icon:<Icon as={Ionicons} size="6" name="cloud-download" />,
      onPress:()=>{
  
      }
    },
    {
      key:'favorite',
      name:'收藏',
      icon:<Icon as={MaterialIcons} size="6" name="favorite" />,
      onPress:()=>{
  
      }
    },
    {
      key:'share',
      name:'分享',
      icon:<Icon as={MaterialIcons} name="share" size="6" />,
      onPress:()=>{
  
      }
    },
    {
      key:'colse',
      name:'关闭',
      icon:<Icon viewBox="0 0 24 24" size="6" fill="none">
        <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
      </Icon>,
      onPress:()=>{
        closeModal()
      }
    }
  ]

  useEffect(() => {
    getImage()
    let timer = setInterval(() => {
      getImage()
    }, 40000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const getImage = async () => {
    setRefreshing(true);
    const res = await getRandomImage({ type: 'pe' });
    const img = ArrayBufferToBase64(res.data);
    setRandomImage(img);
    setRefreshing(false);
  }

  /**关闭选择框 */
  const closeModal = () => {
    setVisible(false)
  }

  /**打开选择框 */
  const openModal = () => {
    setVisible(true)
  }

  const renderMain = () => {

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ width: deviceInfo.width, height: deviceInfo.height - 220 }}
        onPress={openModal}
      >
        <Image style={{ width: '100%', height: '100%' }} resizeMode={'cover'} source={{ uri: randomImage }} />
      </TouchableOpacity>
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
          getImage()
        }}
        showsVerticalScrollIndicator={false} // 隐藏垂直滚动条
      />
      {/* {actionsheetRender()} */}
      <ActionsModal 
        actionOption={actionOption}
        isOpen={visible}
        onClose={closeModal}
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