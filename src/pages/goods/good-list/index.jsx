import deviceInfo from '@/utils/deviceInfo';
import { splitImagesArray } from '@/utils/utils';
import { Spinner } from 'native-base';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import GoodsCard from './GoodsCard';
import WaterfallList from './WaterfallList';

const GoodList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDataList();
        // console.log('data', data);
    }, [])

    const getDataList = () => {
        if(loading){return}
        setLoading(true);
        const _dataList = [];
        for (let i = 0; i < 100; i++) {
            const deData1 = {
                id: Math.random().toString(8).substring(0),
                imgUrl: 'https://img.zcool.cn/community/012a5c5c74acf7a801203d226c61d0.jpg',
                name: '纸品',
                height: 100,
                width: 200,
                price: 121
            }
            const deData2 = {
                id: Math.random().toString(12).substring(0),
                imgUrl: 'https://static.yoshop.xany6.com/10001/20210313/b51b4840c24250a67210d59e345e206d.jpg',
                name: '三系手机',
                height: 200,
                width: 200,
                price: 92111
            }
            if (i % 2) {
                deData1['sortindex'] =data.length>0? data[0].data.length + data[1].data.length + i : i
                _dataList.push(deData1)
            } else {
                deData2['sortindex'] =data.length>0? data[0].data.length + data[1].data.length + i : i
                _dataList.push(deData2)
            }
        }
        setTimeout(()=>{
            setData(splitImagesArray(data, _dataList));
            setLoading(false);
        },2000)


    }

    return (
        <SafeAreaView>
            <WaterfallList 
                data={data} 
                loading={loading}
                onEndReached={(info)=>{
                    getDataList()
                }}
                onEndReachedThreshold={10}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageBody: {
        backgroundColor: '#0001'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    virtual: {
        justifyContent: 'center',
        flex: 1,
        borderColor: 'red',
        borderWidth: 1
    },
    title: {
        fontSize: 32,
    },
    column: {
        flex: 1
    },

})

export default GoodList

