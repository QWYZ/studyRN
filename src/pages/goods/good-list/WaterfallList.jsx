import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import GoodsCard from './GoodsCard';

const WaterfallList = (props) => {

    const { data, loading, onEndReached, onEndReachedThreshold } = props;

    const _renderItem = (item) => {
        return (
            <GoodsCard data={item} onPress={() => { }} />
        )
    }

    const _renderMain = () => {
        return (
            <View style={styles.container}>
                {
                    data && data.length > 0 &&
                    data.map((columndata, i) => {
                        return (
                            <View key={`column${i}`}>
                                {
                                    columndata.data.map((item) => {
                                        return _renderItem(item)
                                    })
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    const _renderFooter = () => {
        return (
            <View style={{ marginVertical: 10 }}>
                {
                    loading ?
                        <Spinner color={'#333'} size={'sm'} /> :
                        <Text style={{ color: '#0003', lineHeight: 20, textAlign: 'center' }}>我是有底线的</Text>

                }
            </View>
        )

    }

    return (

        <VirtualizedList
            data={data}
            initialNumToRender={5}
            renderItem={_renderMain}
            keyExtractor={() => 'WaterfallList'}
            getItemCount={(data) => 1}
            getItem={(data, index) => data[index]}
            ListFooterComponent={_renderFooter}
            onEndReached={(info) => {
                data.length > 0 && onEndReached?.(info);
            }}
            onEndReachedThreshold={0.5 || onEndReachedThreshold}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default WaterfallList