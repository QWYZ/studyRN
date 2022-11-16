import { PermissionsAndroid, ToastAndroid } from "react-native";


const andriodShow = (msg) => ToastAndroid(msg);
export const requestAndriodPermission = async (type) => {
    console.log('requestPermission');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "申请权限测试",
          message:'申请权限测试',
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        andriodShow("权限获取成功");
      } else {
        andriodShow("权限获取失败");
      }
    } catch (err) {
        andriodShow(err);
    }
};

