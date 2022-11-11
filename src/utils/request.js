import axios from 'axios';
import { AsyncStorage } from 'react-native';
 const baseURL = "";

const request = axios.create({
  baseURL,
  headers: {
    get: {
      // get请求头配置
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Accept': 'application/json'
    },
    post: {
      // post请求头配置
      // 'Content-Type': 'application/json;charset=utf-8',
      // 'Accept': 'application/json'
    }
  },
  timeout: 30000, //30s 如果请求花费了超过 `timeout` 的时间，请求将被中断
    // retry: 2,//设置全局请求次数
    // retryDelay: 1000 // 设置全局请求间隔时间
})
 /**
  * http request 拦截器
  */
  request.interceptors.request.use(
   async(config) => {
    // const token = await AsyncStorage.getItem('token')
    // console.log('token_请求拦截', token);
    const headers = {};
    config = {
      ...config,
      url:baseURL + config.url,
      headers: headers || config?.headers,
    }
    // token ? headers['X-Access-Token'] = token : null;
    // token ? headers['Authorization'] = "Bearer " + token : null;
    console.log('请求拦截：',config);

     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );
 
 /**
  * http response 拦截器
  */
  request.interceptors.response.use(
   (response) => {

     console.log('响应拦截：',response);

     return response;
   },
   (error) => {
     console.log("请求出错：", error);
   }
 );

 export {
  request
 }
 
//  /**
//   * 封装get方法
//   * @param url  请求url
//   * @param params  请求参数
//   * @returns {Promise}
//   */
//  export function get(url, params = {}) {
//    return new Promise((resolve, reject) => {
//      axios.get(url, {
//          params: params,
//        }).then((response) => {
//          landing(url, params, response.data);
//          resolve(response.data);
//        })
//        .catch((error) => {
//          reject(error);
//        });
//    });
//  }
 
//  /**
//   * 封装post请求
//   * @param url
//   * @param data
//   * @returns {Promise}
//   */
 
//  export function post(url, data) {
//    return new Promise((resolve, reject) => {
//      axios.post(url, data).then(
//        (response) => {
//          //关闭进度条
//          resolve(response.data);
//        },
//        (err) => {
//          reject(err);
//        }
//      );
//    });
//  }
 
//  /**
//   * 封装patch请求
//   * @param url
//   * @param data
//   * @returns {Promise}
//   */
//  export function patch(url, data = {}) {
//    return new Promise((resolve, reject) => {
//      axios.patch(url, data).then(
//        (response) => {
//          resolve(response.data);
//        },
//        (err) => {
//          msag(err);
//          reject(err);
//        }
//      );
//    });
//  }
 
//  /**
//   * 封装put请求
//   * @param url
//   * @param data
//   * @returns {Promise}
//   */
 
//  export function put(url, data = {}) {
//    return new Promise((resolve, reject) => {
//      axios.put(url, data).then(
//        (response) => {
//          resolve(response.data);
//        },
//        (err) => {
//          msag(err);
//          reject(err);
//        }
//      );
//    });
//  }
 
//  //统一接口处理，返回数据
//  export default function (fecth, url, param) {
//    let _data = "";
//    return new Promise((resolve, reject) => {
//      switch (fecth) {
//        case "get":
//          console.log("begin a get request,and url:", url);
//          get(url, param)
//            .then(function (response) {
//              resolve(response);
//            })
//            .catch(function (error) {
//              console.log("get request GET failed.", error);
//              reject(error);
//            });
//          break;
//        case "post":
//          post(url, param)
//            .then(function (response) {
//              resolve(response);
//            })
//            .catch(function (error) {
//              console.log("get request POST failed.", error);
//              reject(error);
//            });
//          break;
//        default:
//          break;
//      }
//    });
//  }
 
//  //失败提示
//  function msag(err) {
//    if (err && err.response) {
//      switch (err.response.status) {
//        case 400:
//          alert(err.response.data.error.details);
//          break;
//        case 401:
//          alert("未授权，请登录");
//          break;
 
//        case 403:
//          alert("拒绝访问");
//          break;
 
//        case 404:
//          alert("请求地址出错");
//          break;
 
//        case 408:
//          alert("请求超时");
//          break;
 
//        case 500:
//          alert("服务器内部错误");
//          break;
 
//        case 501:
//          alert("服务未实现");
//          break;
 
//        case 502:
//          alert("网关错误");
//          break;
 
//        case 503:
//          alert("服务不可用");
//          break;
 
//        case 504:
//          alert("网关超时");
//          break;
 
//        case 505:
//          alert("HTTP版本不受支持");
//          break;
//        default:
//      }
//    }
//  }
 
//  /**
//   * 查看返回的数据
//   * @param url
//   * @param params
//   * @param data
//   */
//  function landing(url, params, data) {
//    if (data.code === -1) {
//    }
//  }
 
 