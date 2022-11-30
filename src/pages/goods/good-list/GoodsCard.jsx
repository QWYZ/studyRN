import PlacehoderImage from '@/components/Image/PlacehoderImage'
import deviceInfo from '@/utils/deviceInfo'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'

const itemWidth = (deviceInfo.width - 16) / 2;
const GoodsCard = (props) => {

    const { data, onPress} = props
    const itemHeight = itemWidth / data.width * data.height
    
    return (
        <TouchableOpacity
            key={data.id}
            activeOpacity={0.7}
            onPress={() => onPress(data)}
            style={styles.item}>
            <FastImage
                source={{ uri: data.imgUrl }}
                // placeholder={{ uri: 'placeholder' }}
                style={{ width: itemWidth, height: itemHeight, borderRadius: 4 }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>{data.name}</Text>
                <Text style={styles.price}>{data.sortindex}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 4,
        borderRadius: 4,
        overflow:'hidden'
    },
    content:{
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:5
    },
    title:{
        paddingVertical:5,
        lineHeight:20,
        fontSize:16,
        color:'#333',
        textAlign:'left'
    }
    // itemText: {
    //     flexDirection: 'row', 
    //     justifyContent: 'space-between', 
    //     alignItems: 'center',
    //     paddingHorizontal: 10, 
    //     position: 'absolute', 
    //     left: 0, 
    //     right: 0, 
    //     bottom: 0, 
    //     height: 30, 
    //     // backgroundColor: '#fff1', 
    //     borderBottomLeftRadius: 4, 
    //     borderBottomRightRadius: 4
    // },
})

export default GoodsCard