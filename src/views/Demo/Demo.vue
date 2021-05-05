<template>
  <div>
    hello world {{ msg }} {{ name }}
    <HelloWorld msg="组件1" v-bind:fun="parentFun" />
  </div>
</template>

<script lang="js">
import {
  defineComponent, ref, reactive, toRefs, watch,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered,
} from 'vue';
import { useStore } from 'vuex';
import {
  Button, Step, Steps, NoticeBar,
} from 'vant';
import HelloWorld from '@/components/Demo/Demo.vue';

export default defineComponent({
  name: 'Demo',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: 'top',
      name: '2222',
    };
  },
  setup(props, { attrs, slots }) {
    const store = useStore();
    store.commit('setUserInfo', { name: '王二巴' }); // 存储
    // this.name = store.state.userInfo.name;

    onBeforeMount(() => {
    });
    onMounted(() => {
      store.commit('increment');
    //   console.log(store.state.count);
    //   console.log('demo');
    });
    onBeforeUpdate(() => {
    });
    onUpdated(() => {
    });
    onBeforeUnmount(() => {
    });
    onUnmounted(() => {
    });
    onActivated(() => {
    });
    onDeactivated(() => {
    });
    onErrorCaptured(() => {
    });

    const parentFun = () => {
      alert('parent hello world');
    };

    return {
      parentFun
    };
  },
});
</script>

<style lang="less" scoped>
@import "./Demo.less";
</style>
