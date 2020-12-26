<template>
  <div>
    <source-list :tableData="tableData"></source-list>
    <pager @change="pageChange"/>     
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SourceList from "@/components/source-list/source-list.vue";
import Pager from "@/components/source-list/pager.vue";
export default defineComponent({
  setup() {
   let tableData:object[] = [];
   let page:number = 1;
   
       //翻页
    const pageChange = (p:number)=>{
        page = p;
        getGetList();
    }

    const data = reactive({
      tableData,
      pageChange
    });
    const datas = toRefs(data);


    //获取数据
    const getGetList = ()=>{
        console.log(page)
        datas.tableData.value.push({ aaa: "sss" })
        
    }
    
    getGetList();
    return {
      ...datas,
    };
  },

  components: { SourceList,Pager },
});
</script>

<style lang="less">
</style>