import request  from "../utils/request";

/**二次元随机图片 */
export const getRandomImage = async (params) => {
    
    return request.get('https://api.oick.cn/random/api.php',{
        responseType: 'arraybuffer',
        params: params,
    })
}