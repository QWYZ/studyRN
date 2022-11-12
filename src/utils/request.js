import axios from 'axios';
import { AsyncStorage } from 'react-native';
const baseURL = "";

const request = axios.create({
  baseURL,
  headers: {
    get: {
      // get请求头配置
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Accept': 'application/json'
    },
    post: {
      // post请求头配置
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json'
    }
  },
  timeout: 30000, //30s 如果请求花费了超过 `timeout` 的时间，请求将被中断
    // retry: 2,//设置全局请求次数
    // retryDelay: 1000 // 设置全局请求间隔时间
})
 /**
  * http request 拦截器
  */
  request.interceptors.request.use((config) => {
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
  request.interceptors.response.use((response) => {
     console.log('响应拦截：',response);
     return response;
   },(error) => {
     console.log("请求出错：", error);
   }
 );

 export default request
 
 
 