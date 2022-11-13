import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

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
                style={{ width: 60, height: 60 }}
                source={item.img}
              />
              <View style={{ flexDirection: 'row', marginTop: 6 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontFamily: 'PingFang-SC-Medium',
                  }}>
                  {item.title}
                </Text>
                {item?.dot && (
                  <View
                    style={{
                      height: 6,
                      width: 6,
                      borderRadius: 6,
                      backgroundColor: color.red,
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
    //   minHeight: height * 0.15,
      justifyContent: 'space-evenly',
      marginTop: 10,
      marginHorizontal: 14,
      backgroundColor: 'white',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  

export default NavigationGroup