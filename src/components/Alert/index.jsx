import * as React from 'react';
import { Text, View, Modal, Pressable, StatusBar, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import style from '../../assets/style/variable';
import LinearButton from '../Button/linearButton';
import deviceInfo from '../../utils/deviceInfo';

/**
 * @example:
 *          <Alert
                content={this.state.alertMsg}
                title={'提示'}
                visible={this.state.showAlert}
                onRequestClose={() => { this.setState({ showAlert: false }) }}//物理返回按键事件
                onClose={() => { this.setState({ showAlert: false }) }}//关闭按钮事件
                onConfirm={() => { this.setState({ showAlert: false }) }}//确定按钮事件
            />
*/
const  Alert =  ({ visible, onRequestClose, onClose, hideClose, onConfirm, title, btnTitle, content }) => {

    return (
        <Modal
            // animationType="fade"
            transparent={true}
            visible={visible}
            hardwareAccelerated={true}//属性决定是否强制启用硬件加速来绘制弹出层。
            onRequestClose={onRequestClose} //调用物理键返回
        >
            <View style={{
                paddingBottom: 40,//垂直居中 ，填补顶部 statusBar高度
                height: deviceInfo.height,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* <StatusBar backgroundColor={color.halfBlack} barStyle="light-content" translucent={true} /> */}

                <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 8, overflow: 'hidden' }}>

                    {title ? 
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ paddingHorizontal: 4, textAlign: 'center', fontWeight: '700', fontSize: 17, color: 'black' }}>
                            {title}
                        </Text>
                    </View>
                    :
                    null
                    }

                    {/* 默认没有close按钮 */}
                    {
                        hideClose
                            ?
                            <Pressable onPress={onClose} style={{ position: 'absolute', top: 10, right: 8 }}>
                                <Icon name='close' style={{ fontSize: 16, color: '#999999', }} />
                            </Pressable>
                            :
                            null
                    }

                    <ScrollView style={{ minHeight: 50, maxHeight: deviceInfo.height * 0.6, paddingHorizontal: 15, paddingVertical: 12, borderColor: color.border, borderTopWidth: .5, borderBottomWidth: .5 }}>
                        <View style={{ minHeight: 50, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', color: '#555555', fontSize: 15 }}>{content}</Text>
                        </View>
                    </ScrollView>


                    <View style={{ height: 50, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <LinearButton
                            style={{ height: 32, minWidth: 62 }}
                            title={btnTitle ? btnTitle : '确定'}
                            textStyle={{ fontSize: 17 ,color:'blue'}}
                            disabled={false}
                            leftColor={'white'}
                            rightColor={'white'}
                            onPress={onConfirm}
                        />
                    </View>

                </View>
            </View>

        </Modal>
    );
}


export default Alert