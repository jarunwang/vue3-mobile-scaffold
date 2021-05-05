<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import {
  defineComponent, onMounted, onBeforeMount, reactive,
} from 'vue';
import util from '@/assets/js/lib/util';
import router from "@/router";

export default defineComponent({
  name: 'App',
  setup(props, context) {
    const state = reactive({
      Util: new util(),
    });

    const initRemSize = () => {
      const designWidth = 750;
      const rem2px = 1200;
      setFontSize(designWidth, rem2px);
    };

    const setFontSize = (designWidth, rem2px) => {
      // 获取当前设备的默认字体大小
      let defaultFontSize = 0;
      const div = document.createElement('div');
      const head = document.getElementsByTagName('head')[0];

      head.appendChild(div);
      div.style.width = '1rem';
      div.style.display = 'none';
      defaultFontSize = parseFloat(window.getComputedStyle(div, null).getPropertyValue('width'));

      // 计算等比缩放后 html 的 font-size
      // document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
      // 横屏解决方案
      document.documentElement.style.fontSize = `${window.innerWidth / designWidth * rem2px / defaultFontSize * 100}%`;
    };

    const getUserInfo = async () => {
      let res = await state.Util.refreshUserInfo();

      if(router.currentRoute.value.path === '/'){
        return false;
      }else if(res.code !== 1){
        router.push({name:'login'});
      }
    };

    onMounted(() => {
      initRemSize();
    });

    onBeforeMount(async () => {
      getUserInfo();
    });
  },
});
</script>
