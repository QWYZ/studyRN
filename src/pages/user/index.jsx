
import theme1 from '@/assets/theme/theme1';
import deviceInfo from '@/utils/deviceInfo';
import { useLinkTo } from '@react-navigation/native';
// import { Button, ListItem } from '@rneui/base';
import { ListItem, Button, Icon, ThemeProvider } from '@rneui/themed';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import BannerSwiper from '../../components/Banner/BannerSwiper';


const User = (props) => {
  const [isLoading, setLoading] = useState(false); //加载状态
  const linkTo = useLinkTo();
  const list1 = [
    {
      title: 'Appointments',
      icon: 'av-timer',
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff',
    },
    {
      title: 'Passwords',
      icon: 'fingerprint',
    },
    {
      title: 'Pitches',
      icon: 'lightbulb-outline',
    },
    {
      title: 'Updates',
      icon: 'track-changes',
    },
    {
      title: '去登录',
      icon: 'login',
      key:'login'
    },
  ];

  /**刷新 */
  const onRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  const onPressItem = (item) =>{
    console.log(item);
    if(item.key && item.key === 'login'){
      linkTo('/login')
    }
    // console.log('onPressItem',item);
  }

  const TopRender = () => {
    return (
      <View style={styles.topBody}>
        <FastImage
          resizeMode='cover'
          source={{ uri: 'https://images.alphacoders.com/128/1283924.jpg' }}
          style={{ width: '100%', height: '100%' }}

        />
      </View>
    )
  }

  const RowRender = ({ item }) => {
    return (
      <View style={styles.bottomBody}>
          <ListItem.Swipeable
            onPress={() => {onPressItem(item)}}
            bottomDivider
            leftContent={
              <Button
                title="Info"
                icon={{ name: 'info', color: 'white' }}
                buttonStyle={{ minHeight: '100%' }}
              />
            }
            rightContent={
              <Button
                title="Delete"
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              />
            }
          >
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
      </View>
    )
  }



  return (
    <View style={styles.container}>
      <FlatList
        data={list1}
        ListHeaderComponent={<TopRender />}
        renderItem={RowRender}
        keyExtractor={(item, index) => index.toString()}
        // 一定要有onRefresh事件才可以触发refreshing加载动画
        refreshing={isLoading}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}// 隐藏垂直滚动条
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceInfo.width,
    height: deviceInfo.height
  },
  topBody: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: theme1.primary,
    // paddingHorizontal: 12,
    // paddingTop: 24
  },
  bottomBody: { 
    backgroundColor: 'white', 
    // marginTop: 12, 
    // marginHorizontal: 12, 
    // borderRadius: 6 
  }
})
export default User