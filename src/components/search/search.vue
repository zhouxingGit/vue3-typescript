<template>
  <div class="search">
    <a-input-search
      size="large"
      class="input-search"
      v-model:keyword="keyword"
      placeholder="关键字搜索"
      enter-button
      @pressEnter="onSearch"
      @search="onSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";

interface Search {
  keyword: string;
  onSearch: (page: string) => void;
}

export default defineComponent({
  setup(props, context) {
    const data: Search = reactive({
      keyword: "",
      onSearch: (value) => {
        context.emit("search", value);
      },
    });

    const datas = toRefs(data);

    return {
      ...datas,
    };
  },
  props: {
    tableData: {
      type: Array,
    },
  },
});
</script>

<style lang="less">
.search {
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;

  .input-search {
    width: 400px;
  }
}
</style>