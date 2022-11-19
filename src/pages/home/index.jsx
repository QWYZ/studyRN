import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Image, Text, TouchableOpacity, View, BackHandler, ToastAndroid, ImageBackground, NativeModules, PermissionsAndroid } from 'react-native';
import BannerSwiper from '@/components/Banner/BannerSwiper';
import { getStorageData } from '@/utils/storage';
import { ArrayBufferToBase64, blobToBase64 } from '@/utils/utils';
import deviceInfo from '@/utils/deviceInfo';
import theme from '@/assets/theme/theme1';
import { Actionsheet, Button, Center, Icon, Toast, useToast } from 'native-base';
import { Path } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionsModal from '@/components/ActionsModal';
import NavigationGroup from './components/NavigationGroup';
import { useLinkTo } from '@react-navigation/native';
import { useLinkProps } from '@react-navigation/native';
import { getRandomImage } from '@/service/home';
import { checkAndriodPermission, requestAndriodPermission, requestMultipleAndriodPermission } from '@/utils/permission';
const { SplashScreenModule } = NativeModules;
const imageOptions = [
  { uri: 'https://images.alphacoders.com/128/1283924.jpg' },
  { uri: 'https://images4.alphacoders.com/112/1129086.png' },
  { uri: 'https://images2.alphacoders.com/127/1272824.png' }
]



const Home = (props) => {
  // console.log('home页:', props);
  const [randomImage, setRandomImage] = useState(); //随机图片
  const [refreshing, setRefreshing] = useState(false);//下拉刷新状态
  const [visible, setVisible] = useState(false);//
  const linkTo = useLinkTo();
  const toast = useToast();
  let lastBackPressed = null;
  const actionOption = [
    {
      key: 'download',
      name: '下载',
      icon: <Icon as={Ionicons} size="6" name="cloud-download" />,
      onPress: () => {

      }
    },
    {
      key: 'favorite',
      name: '收藏',
      icon: <Icon as={MaterialIcons} size="6" name="favorite" />,
      onPress: () => {

      }
    },
    {
      key: 'share',
      name: '分享',
      icon: <Icon as={MaterialIcons} name="share" size="6" />,
      onPress: () => {

      }
    },
    {
      key: 'colse',
      name: '关闭',
      icon: <Icon viewBox="0 0 24 24" size="6" fill="none">
        <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
      </Icon>,
      onPress: () => {
        closeModal()
      }
    }
  ]

  const navList = [
    {
      dot: false,
      title: '启动页',
      onPress: () => {
        toast.show({ description: '此功能已关闭', duration: 1000 });
        // SplashScreenModule.show();
      },
      img: require('../../assets/images/suber.png'),
    },
    {
      dot: false,
      title: '获取权限',
      onPress: async () => {
        let check = await checkAndriodPermission(['CAMERA']);
        if (check) {
          linkTo('/home/cartoon');
        } else {
          requestAndriodPermission('CAMERA');
        }
      },
      img: require('../../assets/images/suber.png'),
    },
    {
      dot: false,
      title: '多项权限',
      onPress: async () => {
        let check = await checkAndriodPermission(['CAMERA', 'WRITE_EXTERNAL_STORAGE', 'READ_EXTERNAL_STORAGE']);
        if (check) {
          linkTo('/home/cartoon');
        } else {
          requestMultipleAndriodPermission(['CAMERA', 'WRITE_EXTERNAL_STORAGE', 'READ_EXTERNAL_STORAGE'])
        }
      },
      img: require('../../assets/images/suber.png'),
    },
    {
      dot: false,
      title: '动漫图',
      onPress: () => {
        console.log('进入');
        linkTo('/home/cartoon');
      },
      img: require('../../assets/images/suber.png'),
    },
    {
      dot: false,
      title: '支付',
      onPress: () => {
        console.log('进入支付');
        // linkTo('/home/cartoon');
      },
      img: require('../../assets/images/suber.png'),
    }
  ]




  useEffect(() => {
    listenBack();
    // getImage();
    // SplashScreenModule.hide();
    return () => {
      removeListenBack();
      // clearInterval(timer);
    }

  }, [])

  /**监听 ： 两次点击返回按钮退出APP */
  const listenBack = () => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onBackAndroid);
    }
  }
  /**移除监听 ： 两次点击返回按钮退出APP */
  const removeListenBack = () => {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', onBackAndroid);
    }
  }

  const onBackAndroid = () => {
    //判断该页面是否处于聚焦状态
    if (props) {
      if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp();//直接退出APP
        return false;
      } else {
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', 1000);//提示
        return true;
      }
    }

  }

  /**获取随机图片 */
  const getImage = async () => {
    setRefreshing(true);
    getRandomImage({ type: 'pe' }).then(async (res) => {
      const img = await blobToBase64(res.data);
      // console.log(img);
      setRandomImage(img);

    }).catch((err) => {
      toast.show({
        description: '请求失败',
        placement: 'bottom',
        duration: 3000
      })
    }).finally(() => {
      setRefreshing(false);
    })
  }

  /**关闭选择框 */
  const closeModal = () => {
    setVisible(false)
  }

  /**打开选择框 */
  const openModal = () => {
    setVisible(true)
  }

  const NavRender = () => {

    return (
      <View style={styles.navBody}>
        <View style={styles.bgImage}><Text></Text></View>
        <View style={{ position: 'absolute', width: deviceInfo.width, height: 200, top: 0 }}>
          <View style={{ marginHorizontal: 15, marginVertical: 10, paddingHorizontal: 5, paddingVertical: 10, backgroundColor: 'white', borderRadius: 15 }}>
            <NavigationGroup options={navList} />
            {/* <NavigationGroup options={navList} /> */}
          </View>
        </View>
      </View>
    )
  }

  const renderMain = () => {

    return (
      <View>
        <BannerSwiper height={230} images={imageOptions} />
        <NavRender />
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{linkTo('/home/cartoon');}}
          >
            <Image
              style={{ width: deviceInfo.width, height: deviceInfo.height - 400 }}
              resizeMode={'contain'}
              source={randomImage ? { uri: randomImage } : require('../../assets/images/imgfail.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    )
  }

  //  let token = await getStorageData('token');
  console.log('token2:', deviceInfo.width);
  return (
    <View style={styles.container}>
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
      {/* <ActionsModal
        actionOption={actionOption}
        isOpen={visible}
        onClose={closeModal}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff1',
  },
  navBody: {
    position: 'relative',
    height: 120,
    // borderColor:'red',
    // borderWidth:1
  },
  bgImage: {
    height: 100,
    backgroundColor: theme.primary,
    borderBottomLeftRadius: deviceInfo.height * 0.1,
    borderBottomRightRadius: deviceInfo.height * 0.1,
  },
})

export default Home