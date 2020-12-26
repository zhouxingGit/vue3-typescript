<template>
  <div class="page">
    <a-pagination v-model:current="current" :total="500" @change="pageChange"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive,toRefs } from "vue";

interface page {
    current:number,
    pageChange:(page:number) => void
}

export default defineComponent({
  setup(props,context) {
    const data:page = reactive({
        current:1,
        // 翻页
        pageChange:(page:number)=>{
            datas.current.value = page;

            //将数据页码传出
            context.emit("change",page);
        }
    })

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
    .page{
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content:center;
    }

</style>