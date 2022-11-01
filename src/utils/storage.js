import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 存储数据
 * @param {string} storage_Key 
 * @param {*} value 
 */
export const storeStorageData = async (storage_Key,value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(storage_Key, jsonValue)
  } catch (e) {
    // saving error
    console.warn(e)
  }
}

/**
 * 获取存储数据
 * @param {string} storage_Key 
 * @returns 
 */
export const getStorageData = async (storage_Key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.warn(e)
  }
}

/**移除指定存储
 * @param storage_Key{string} 
 */
export const removeStorageData = async (storage_Key) => {
  try {
    await AsyncStorage.removeItem(storage_Key)
  } catch(e) {
    // remove error
    console.warn(e)

  }
}

/**清空全部存储 */
export const removeAllStorageData = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // remove error
    console.warn(e)

  }
}