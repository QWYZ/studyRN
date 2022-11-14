import * as React from 'react';
import { Text, View, Pressable, StatusBar } from 'react-native';
import color from '../../assets/theme/theme1';
import { Icon } from 'native-base';

/**
 *             <Header
                    leftIconPress={() => {  this.props.navigation.goBack() }}
                    title={'订单管理'}
                    headStyle={{backgroundColor:'white'}}
                >
*/
export default function Header ({ rightIcon, rightIconPress, rightText, rightTextPress, leftIcon, leftIconPress, title, titleStyle, headStyle }) {
    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
            <View style={[
                {
                    paddingTop: StatusBar.currentHeight || 42,
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    paddingHorizontal: 10, paddingBottom: 4
                },
                headStyle
            ]}>
                {/* 默认有左侧按钮*/}
                {
                    leftIcon
                        ?
                        <Pressable hitSlop={12} onPress={leftIconPress}>
                            <Icon type='AntDesign' name={leftIcon.name} style={{ color: leftIcon.color, fontSize: leftIcon.size }} />
                        </Pressable>
                        :
                        <Pressable hitSlop={12} onPress={leftIconPress}>
                            <Icon type='AntDesign' name={'left'} style={{ color: color.fontcolor, fontSize: 20 }} />
                        </Pressable>
                }

                <Text style={[
                    {
                        paddingVertical: 10,
                        fontSize: 18,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontWeight: '600',
                        color: color.fontcolor,
                        paddingLeft: rightText || rightIcon ? 13 : 0
                    }, titleStyle]}>
                    {title}
                </Text>

                {
                    rightText &&
                    <Text
                        onPress={rightTextPress}
                        style={{ textAlign: 'right', fontSize: 15, color: color.primary2 }}>{rightText}
                    </Text>
                }

                {
                    rightIcon &&
                    <Pressable hitSlop={12} onPress={rightIconPress}>
                        <Icon type='AntDesign' name={rightIcon.name} style={{ color: rightIcon.color, fontSize: rightIcon.size, marginLeft: 6 }} />
                    </Pressable>
                }


                {/* 利用右侧按钮占位，保证 title居中*/}
                {
                    !(rightIcon || rightText) &&
                    <Pressable hitSlop={12} style={{ opacity: 0 }}>
                        <Icon type='AntDesign' name={'bars'} style={{ color: color.fontcolor, fontSize: 20 }} />
                    </Pressable>
                }

            </View>
        </>

    );
}


