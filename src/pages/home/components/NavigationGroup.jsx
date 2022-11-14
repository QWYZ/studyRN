import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import deviceInfo from '../../../utils/deviceInfo';

const NavigationGroup = (props) => {
    const { options } = props
    return (
        <View style={styles.navIcon}>
          {options.map((item, i) => (
            <Pressable
              key={`nav${i}`}
              onPress={item.onPress}
              style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Image
                resizeMode={'cover'}
                style={{ width: 60, height: 60, borderRadius:8 }}
                source={item.img}
              />
              <View style={{ flexDirection: 'row', marginTop: 4 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color:'gray',
                    // fontFamily: 'PingFang-SC-Medium',
                  }}>
                  {item.title}
                </Text>
                {item?.dot && (
                  <View
                    style={{
                      height: 6,
                      width: 6,
                      borderRadius: 6,
                      backgroundColor: 'red',
                    }}
                  />
                )}
              </View>
            </Pressable>
          ))}
        </View>
      );

}
const styles = StyleSheet.create({
    navIcon: {
    //   zIndex: 1000,
      // minHeight: deviceInfo.height * 0.15,
      justifyContent: 'space-around',
      marginTop: 5,
      marginHorizontal: 14,
      backgroundColor: 'white',
      // borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  

export default NavigationGroup