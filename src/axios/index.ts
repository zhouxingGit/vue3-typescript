import axios from "axios";
import router from "@/router";
import config from "@/config";
import {message} from "ant-design-vue";
import errMessage from "./errorMessage";

/**
 * 请求拦截
 */

axios.interceptors.request.use(cfg => {
    cfg.headers['token'] = localStorage.getItem('token') ? localStorage.getItem('token') : ''; // 请求头带上token
    return cfg;
  }, error => {
    return Promise.reject(error);
  });
  
  /**
   * 响应拦截
   */
  axios.interceptors.response.use(response => {
    let code = response.data.code;
    if (code === 0) {//成功
      return response.data.data || response.data.data === 0?response.data.data:{};
    } else if (code === 2401) {//token失效 重新登录
     
    } 
  
     // return Promise.reject();
    
  }, err => {
    if (err.response.status === 403) {
      router.push('403');
    } else if (err.response.status === 404) {
      router.push('404');
    } else {
    }
    return Promise.reject(err);
  });
  