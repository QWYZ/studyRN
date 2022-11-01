import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

/**
 * 轮播图
 * @destription 基于'react-native-swiper'构建，循环滚动时会闪屏
 */
const BannerSwiper = (props) => {

    const { images } = props

    return (
        <Swiper
            style={styles.swiper}
            height={200}
            loop={true}
            horizontal={true}
            paginationStyle={{ bottom: 2 }}
            showsButtons={false}
            autoplay
        >
            {
                images.map((item, i) => {

                    return (
                        <Image key={i} source={{uri:item.uri}} style={styles.img} />
                    )
                })
            }
        </Swiper>

    )
}

const styles = StyleSheet.create({
    swiper: {
        height: 200,
    },
    img: {
        width: '100%',
        height: 200,
    }
});
export default BannerSwiper