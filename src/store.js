import 'babel-polyfill';
import Es6Promise from 'es6-promise';
import { createStore } from 'vuex'

require('es6-promise').polyfill();


const store = createStore({
  state () {
    return {
      count: 0,
      userInfo: {}
    }
  },
  mutations: {
    setUserInfo (state, data) { //保存用户信息
      Object.assign(state, {userInfo: data});
    }
  }
})


export default store;
