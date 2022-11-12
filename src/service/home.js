import request  from "../utils/request";

/**二次元随机图片 */
export const getRandomImage = (params) => {
    
    return request.get('https://api.oick.cn/random/api.php',{
        responseType: 'blob',
        params: params,
    })
}
