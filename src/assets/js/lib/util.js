import Es6Promise from 'es6-promise';
import fetchJsonp from 'fetch-jsonp';
import router from '@/router';

Es6Promise.polyfill();
class Util {
    Vue = '';

    VM = '';

    debounce = '';

    debounceFun = () => {};

    constructor() {
      // 初始化
      this.debounce = true;
    }

    getUrlParam(name) {
      const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`); // 构造一个含有目标参数的正则表达式对象
      const r = window.location.search.substr(1).match(reg); // 匹配目标参数
      if (r != null) {
        return unescape(r[2]);
      }
      return null; // 返回参数值
    }

    getUrlParamObj(url) {
      const obj = {};
      if (url.indexOf('?') >= 0) {
        const arr1 = url.split('?');
        const arr2 = arr1[1].split('&');
        for (let i = 0; i < arr2.length; i++) {
          const res = arr2[i].split('=');
          obj[res[0]] = res[1];
        }
      }
      return obj;
    }
}

export default Util;
