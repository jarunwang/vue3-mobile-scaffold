import 'babel-polyfill';
import { createApp } from 'vue';
import Es6Promise from 'es6-promise';
import { Toast } from 'vant';
import AppVue from './App.vue';
import '@/assets/less/app.less';
import router from './router';
import store from './store';

Es6Promise.polyfill();

window.Config = { // 全局公用变量
  host: process.env.VUE_APP_HOST,
  userinfo: {},
};

window.Components = { // 全局组件
  toast: Toast,
};


const app = createApp(AppVue);
app.use(store).use(router).use(Toast).mount('#app');
