import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const BannerCarousel = (props) => {
    const { images } = props
    const [activeSlide, setActiveSlide] = useState(0);

    console.log('BannerCarousel:',props);
    /** 分页 */
    const renderPagination = () => {

        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        )
    }


    const  renderItem =  (item) => {
        console.log('renderItem:',item);
        return <Image source={item.url} style={styles.img} />
    }

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }


    return (
        <View>
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={images}
              renderItem={_renderItem}
              sliderWidth={200}
              itemWidth={100}
            />
            {/* {renderPagination()} */}
        </View>
    )
}

const styles = StyleSheet.create({
    // swiper: {
    //     height: 200,
    // },
    img: {
        width: '100%',
        height: 200,
    }
});

export default BannerCarousel