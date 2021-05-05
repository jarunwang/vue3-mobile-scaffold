<template>
  <div class="demo">
    <h1 v-bind:style="color">{{ msg }}</h1>
    <button @click="showAlert">按钮</button>
    <button @click="showParentFun">父级按钮</button>
  </div>
</template>

<script lang="js">
import {
  defineComponent, reactive, toRefs, onMounted,
} from 'vue';

export default defineComponent({
  name: 'Demo',
  setup(props) {
    let _this = this;  
    const state = reactive({
      color: { color: "red" },
    });

    onMounted(() => {
    //   console.log("组件渲染");
    });

    const showAlert = () => {
      alert('hello world');
    };
	
    const showParentFun = () => {
      props.fun();
    };

    return {
	  showAlert,
	  showParentFun,
      ...toRefs(state),
    };
  },
});
</script>
