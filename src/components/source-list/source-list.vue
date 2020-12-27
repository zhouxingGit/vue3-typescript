<template>
  <div class="wrap">
    <ul class="article-list">
      <li v-for="(item, index) in tableData" :key="index">
        <a :href="`#/articleDetail/${item.id}`">
          <div class="img"></div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
          </div>
        </a>
        <div class="tags">
          <div class="tag-list">
            <div>
              <i class="iconfont iconxihuan"></i>
              {{ item.like }}
            </div>
            <div>
              <i class="iconfont iconshijian"></i>
              {{ item.updateTime }}
            </div>
          </div>
          <div class="tag-list">
            <div>
              <i class="iconfont iconuser"></i>
              <a :href="`#/authDetail/${item.userId}`" class="userlink">
                {{ item.auth }}
              </a>
            </div>
            <div>
              <i class="iconfont icontubiaozhizuosvg-22"></i>
              {{ item.pv }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  setup(props, context) {
    return {
      ...props,
    };
  },
  props: {
    tableData: {
      type: Array,
    },
  },
});
</script>

<style lang="less" scope>
@import "./index.less";
</style>