<template>
  <div>
      Index
  </div>
</template>

<script lang="js">

import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  name: 'Index',
  components: {},
  setup() {
     router.push({
        path: 'demo',
      });
  },
});
</script>