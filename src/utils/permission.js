import { PermissionsAndroid, ToastAndroid } from "react-native";

const andriodShow = (msg) => ToastAndroid.show(msg, 1000);
/**申请单项权限 */
export const requestAndriodPermission = async (type) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS[type]
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

/**申请多项权限 
 * @param {Array} permissions
*/
export const requestMultipleAndriodPermission = async (permissions) => {

    let _permissions =  permissions.map((type) =>{
      return PermissionsAndroid.PERMISSIONS[type]
    })
    console.log('_permissions',_permissions);
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        _permissions
      );
      // console.log(granted);
      let keys = Object.keys(granted);
      for (let i = 0; i < keys.length; i++){
        if(PermissionsAndroid.RESULTS.GRANTED !== granted[keys]){
          andriodShow("权限获取失败");
        }
      }
      andriodShow("权限获取成功");
    } catch (err) {
        andriodShow(err);
    }
};


/**检查权限 
 * @param {Array} permissions
*/
export const checkAndriodPermission = async (permissions) =>{
  let len = permissions.length;
  let promise = [];
  for (let i = 0; i < len; i++) {
    let type = permissions[i];
    let status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS[type])
    if (!status) {
      return false
    }
  }
  return true
}
