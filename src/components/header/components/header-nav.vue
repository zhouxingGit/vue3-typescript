<template>
  <div class="nav-links">
    <a
      v-for="(item, index) in links"
      :key="index"
      :href="`#/${item.to}`"
      class="nav-link-item"
      :class="item.to === $route.path.slice(1) ? 'active' :''"
      @click="active = index"
    >
      <i class="iconfont" :class="item.iconfont"></i>
      {{ item.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let links = ref([
      {
        name: "首页",
        to: "",
        iconfont:"iconhome"
      },
      {
        name: "JavaScript",
        to: "JavaScript",
        iconfont:"iconnodejs"
      },
      {
        name: "ES6",
        to: "ES6",
        iconfont:"iconnodejs"
      },
      {
        name: "NodeJs",
        to: "NodeJs",
        iconfont:"iconnodejs"
      },
      {
        name: "关于",
        to: "About",
        iconfont:"iconguanyu"
      },
    ]);



    return {
      links
    };
  },

});
</script>

<style lang="less">
.nav-link-item {
  margin-right: 24px;
  font-size:15px;
  &:last-child {
    margin-right: 0;
  }
  &:hover{
      color: red
  }
  &.active{
       color: red
  }
}
</style>