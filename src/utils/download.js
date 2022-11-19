import { PermissionsAndroid, Platform } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFS from 'react-native-fs';
import RNFetchBlob from "rn-fetch-blob";

/**
  * 下载网页图片
  * @param  uri  图片地址
  * 
  */
export const downloadImage = (uri) => {
    if (!uri) return null;
    return new Promise((resolve, reject) => {
        let timestamp = (new Date()).getTime();//获取当前时间错
        let random = String(((Math.random() * 1000000) | 0))//六位随机数
        let dirs = Platform.OS === 'ios' ? 
        RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
        const downloadDest = `${dirs}/${timestamp + random}.jpg`;
        const formUrl = uri;
        const options = {
            fromUrl: formUrl,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
                // console.log('begin', res);
                // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
        };
        try {
            const res = RNFS.downloadFile(options);
            res.promise.then(res => {
                var promise = CameraRoll.save(downloadDest);
                promise.then(function (result) {
                    alert('保存成功！地址如下：' + result);
                }).catch(function (error) {
                    console.log('error', error);
                    alert('保存失败！' + error);
                });
                resolve(res);
            }).catch(err => {
                reject(new Error(err))
            });
        } catch (e) {
            reject(new Error(e))
        }

    })

}

/**
 * 保存图片到相册
 * @param ImageUrl  图片地址
 * 
 */
export const downloadLocalImage = (ImageUrl) => {
    if (!ImageUrl) return null;
    return new Promise((resolve, reject) => {
        try {
            var promise = CameraRoll.save(ImageUrl);
            promise.then(function (result) {
                resolve({ statusCode: 200 });
                alert('保存成功！地址如下：' + result);
            }).catch(function (error) {
                console.log('error', error);
                alert('保存失败！' + error);
            });
        } catch (e) {
            reject(new Error(e))
        }

    })

}



/**
 * 保存base64图片到相册
 * @param {string} base64Image
 * 
 */

export const downloadImageBase64 = async (base64Image) => {
    if (!base64Image) return null;
    let image_data = base64Image.split("data:image/png;base64,")
    const file_path = RNFetchBlob.fs.dirs.DCIMDir + '/' + new Date().getTime() + "/image.png";

    RNFetchBlob.fs.writeFile(file_path, image_data[1], 'base64').then((res) => {
        return CameraRoll.save(`file://${file_path}`)
    }).catch((error) => {
        console.warn('RNFS.writeFile,err',JSON.stringify(error));
    });
}

