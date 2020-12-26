<template>
  <div class="nav-links">
      {{tableData}}
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  setup(props,context) {
    return {
      ...props
    };
  },
  props:{
      tableData:{
          type:Array
      }
  },
 
});
</script>

<style lang="less">

</style>