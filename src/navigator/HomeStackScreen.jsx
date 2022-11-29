/**
 * 子路由容器 2 
 */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Text } from 'native-base';
import theme1 from '../assets/theme/theme1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//page view 
import Cartoon from '../pages/cartoon';
import GoodList from '@/pages/goods/good-list';


const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation, route }) {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: theme1.primary },
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 17,
                    color: 'white',
                    fontWeight: '600',
                    paddingTop: 1.5
                    // fontFamily:''
                },
                headerLeft: () => (
                    <TouchableOpacity style={{ paddingVertical: 10, paddingRight: 10 }} onPress={() => { navigation.goBack() }}>
                        <Icon name='left' as={AntDesign} size="6" color={'white'}/>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Icon name='right' as={AntDesign} size="6" color={'white'}/>
                    </TouchableOpacity>
                )
            }}
        >
            <HomeStack.Screen
                name="cartoon"
                component={Cartoon}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="goodlist"
                component={GoodList}
                options={{ headerShown: true, title:'商品列表', headerRight:false }}
            />

        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;