import * as React from 'react';
import { Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * 渐变按钮
 * 
 * @example:
 *                <LinearButton
                        style={{ height: 32, width: 56, position: 'absolute', right: 12, top: 50 }}
                        title={'离开'}
                        textStyle={{ fontSize: 13 }}
                        disabled={false}
                        leftColor={'#AAFFA9'}
                        rightColor={'#11FFBD'}
                        onPress={onClose}
                    >
                         <AntDesign name={'close'} color={'white'} size={12} ></AntDesign>
                    </LinearButton>
*/

const LinearButton =  ({ style, textStyle, title, leftColor, rightColor, disabled, onPress, children }) => {

    return (
        <Pressable
            hitSlop={12}
            onPress={onPress}
            disabled={disabled}
            style={[
                {
                    height: style && style.height ? style.height : 56,
                    borderRadius: style && style.height ? (style.height / 2) : 1,
                    overflow: 'hidden',
                },
                style
            ]}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={disabled ? ['#e0e0e0', '#e0e0e0'] : [leftColor, rightColor]}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                <Text style={[{ fontSize: 17, color: '#fff', textAlign: 'center', textAlignVertical: 'center' }, textStyle]}>{title}</Text>
                {children}
            </LinearGradient>
        </Pressable>

    );
}


export default LinearButton