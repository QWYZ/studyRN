import { Icon, Toast, useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, PanResponder, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Path } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionsModal from '@/components/ActionsModal';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { getRandomImage } from '@/service/home';
import deviceInfo from '@/utils/deviceInfo';
import { blobToBase64 } from '@/utils/utils';
import { checkAndriodPermission } from '@/utils/permission';
import { DownloadImage, downloadImageBase64, DownloadLocalImage } from '@/utils/download';

const Cartoon = () => {
  const [randomImage, setRandomImage] = useState(); //随机图片
  const [refreshing, setRefreshing] = useState(false);//下拉刷新状态
  const [visible, setVisible] = useState(false);
  const [pauseRefresh, setPauseRefresh] = useState(false)//暂停
  const toast = useToast();
  const actionOption = [
    {
      key: 'download',
      name: '下载',
      icon: <Icon as={Ionicons} size="6" name="cloud-download" />,
      onPress: async() => {
        try {
          let res = await downloadImageBase64(randomImage);      
          toast.show({
            description:'已保存到相册',
            duration:1000
          })
        } catch (error) {
          toast.show({
            description:'下载失败',
            duration:1000
          })
        }
        setVisible(false);
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

  useEffect(() => {
    // let timer = null;
    getImage();
    // return () => {
    //   clearTimeout(timer)
    // }
  }, []);

  /**手势滑动监听 */
  const panResponder = PanResponder.create({
    //在用户开始触摸的时候（手指刚刚接触屏幕的瞬间），是否愿意成为响应者？
    onStartShouldSetPanResponder: () => true, 
    //如果 View 不是响应者，那么在每一个触摸点开始移动（没有停下也没有离开屏幕）时再询问一次：是否愿意响应触摸交互呢？
    onMoveShouldSetPanResponder: () => true,
    //触摸操作结束时触发，比如"touchUp"（手指抬起离开屏幕）。
    onPanResponderRelease: (evt, gs) => {
      // console.log('结束移动：X轴移动了：' + gs.dx + '，Y轴移动了：' + gs.dy);
      if (gs.dx > 50) {
        // console.log('由左向右');
      } else if (gs.dx < -50) {
        // console.log('由右向左');
        getImage();
      } else if (gs.dy > 50) {
        // console.log('由上向下');
      } else if (gs.dy < -50) {
        // console.log('由下向上');
      }
    }
  });


  const getImage = async () => {
    
    setRefreshing(true);
    getRandomImage({ type: 'pe' }).then(async (res) => {
      const img = await blobToBase64(res.data);
      // console.log(img);
      setRandomImage(img);

    }).catch((err) => {
      alert(err);
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
    setPauseRefresh(false)
  }

  /**打开选择框 */
  const openModal = () => {
    setPauseRefresh(true)
    setVisible(true)
  }

  const renderMain = () => {
    return (
      <View {...panResponder.panHandlers}>
        <Pressable
          // activeOpacity={0.9}
          style={{ width: deviceInfo.width, height: deviceInfo.deviceHeight}}
          onPress={openModal}
        >
          <Image style={{ width: '100%', height: '100%' }} resizeMode={'contain'} source={randomImage ? { uri: randomImage } : require('../../assets/images/imgfail.png')} />
        </Pressable>
      </View>
    )
  }


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
  },
})

export default Cartoon