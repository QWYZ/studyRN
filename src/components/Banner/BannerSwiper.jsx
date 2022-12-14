import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

/**
 * 轮播图
 * @destription 
 */
const BannerSwiper = (props) => {

    const { images, height = 200, style } = props

    return (
        <View style={[{ height: height },style]}>
            <Swiper
                style={styles.swiper}
                height={height}
                loop={true}
                horizontal={true}
                paginationStyle={{ bottom: 2 }}
                showsButtons={false}
                autoplay
                autoplayTimeout={2}
                removeClippedSubviews={false}//解决andriod闪屏问题
            >
                {
                    images.map((item, i) => {

                        return (
                            <FastImage key={i} source={{ uri: item.uri }} style={{...styles.img,height:height}} />
                        )
                    })
                }
            </Swiper>
        </View>


    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
    }
});
export default BannerSwiper