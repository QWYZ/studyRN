
import { useLinkTo } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'


const User = () => {
  const linkTo = useLinkTo();
  return (
    <View style={styles.container}>
      <Text>User</Text>
      <View style={{position:'absolute',bottom:'20%',width:'100%'}}>
      <Button
        onPress={()=>{linkTo('/login')}}
        title={'去登录'}
      />
      </View>
    </View>
  )
}

export default User