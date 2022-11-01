import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
//createNativeStackNavigator是一个函数，它返回一个包含 2 个属性的对象：Screen和Navigator. 它们都是用于配置导航器的 React 组件。
//Navigator应该包含元素作为其子元素，Screen以定义路由的配置
// const Stack = createNativeStackNavigator();
import { Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import User from '../pages/user';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const TabRoute = () => {

    const tabOptions = [
        {
            key:'Home',
            iconType:'Ionicons',
            focused:'home',
            unfocused:'home-outline'
        },
        {
            key:'User',
            iconType:'Ionicons',
            focused:'person',
            unfocused:'person-outline'
        }
    ]

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'User') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons key={route.name}  name={iconName} style={{ fontSize: size-3, color: color }} />;
                },
                tabBarActiveTintColor: '#3F51B5',
                tabBarInactiveTintColor: '#333333',
                headerShown:false
                // tabBarStyle:Platform.OS === 'ios' ?{paddingBottom:5}:null
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ title: '首页' }}/>
            <Tab.Screen name="User" component={User} options={{ title: '我的' }}/>
        </Tab.Navigator>
    )
}

export default TabRoute