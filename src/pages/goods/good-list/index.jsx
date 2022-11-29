import deviceInfo from '@/utils/deviceInfo';
import { splitImagesArray } from '@/utils/utils';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import GoodsCard from './GoodsCard';

const GoodList = () => {
    const [data, setData] = useState([]);
    const virtualRef = useRef();
    const scrollRef = useRef();
    useEffect(() => {
        getDataList();
        console.log('data', data);
    }, [])

    const getDataList = () => {
        const _dataList = [];
        for (let i = 0; i < 30; i++) {
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
                _dataList.push(deData1)
            } else {
                _dataList.push(deData2)
            }
        }

        setData(splitImagesArray(_dataList))
    }

    const scrollComponent = (props) => {
        return (

            <View style={styles.column}>
                {props.children}
            </View>

        )
    }

    const _renderItem = ({ item }) => {
       
        return (
            <GoodsCard data={item} onPress={() => { }} />
        )
    }

    const _getItem = (item, index) => {
        
        return item[index]
    }

    const _getItemCount = (item) => {
        // console.log('_getItemCount:',item.length);
        return item.length
    }

    const RenderItem = ({item}) => {
        return (
            <View style={styles.container} key={item.id}>
                {
                    data && data.length > 0 &&
                    data.map((col => {
                        return (
                            <VirtualizedList
                                ref={virtualRef}
                                listKey={col.key}
                                data={col.data}
                                scrollEnabled={false}
                                initialNumToRender={5}
                                renderItem={_renderItem}
                                keyExtractor={item => item.key}
                                getItemCount={_getItemCount}
                                getItem={_getItem}
                                // renderScrollComponent={scrollComponent}
                            />
                        )
                    }))
                }
            </View>
        )
    }

    const Item2 = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{'hsdhhh'}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
              <FlatList
                // flatlist只能包裹水平滚动的scrollview
                data={[{ id: 'virtual' }]}
                renderItem={({item}) => <RenderItem item={item} />}
                // renderItem={this.renderMain}
                keyExtractor={(item) => item.id}
                // 一定要有onRefresh事件才可以触发refreshing加载动画
                // refreshing={refreshing}
                // flatlist的下拉刷新在ios需要手动控制refreshing状态的改变
                showsVerticalScrollIndicator={false} // 隐藏垂直滚动条
            />
            {/* <ScrollView>
                <RenderItem />
                <View><Text style={{textAlign:"center", color:'gray'}}>我是有底线</Text></View>
            </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0002'
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

