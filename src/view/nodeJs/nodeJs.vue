<template>
  <div>
    <search @search="searchData"/>
    <source-list :tableData="tableData"></source-list>
    <pager @change="pageChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SourceList from "@/components/source-list/source-list.vue";
import Pager from "@/components/pager/pager.vue";
import Search from "@/components/search/search.vue";
export default defineComponent({
  setup() {
    let tableData: object[] = [];
    let pageNo: number = 1;
    let pageSize:number = 12;
    let keyword:string = "";
    let type:number = 2; //文章类型

    //翻页
    const pageChange: (p: number) => void = (page) => {
      pageNo = page;
    
      getGetList();
    };

    //查询
    const searchData:(keyword:string) =>void = (key) =>{
      keyword = key;
      getGetList();
    }

    const data = reactive({
      tableData,
      searchData,
      pageChange,
    });
    const datas = toRefs(data);

    //获取数据
    const getGetList = () => {
      console.log(pageNo,pageSize,keyword);
      datas.tableData.value.push(
        { 
          id:"52554124",
          title:"程序员搜索88888*****",
          type:0,
          like:200,
          pv:2000,
          updateTime:"2020-11-11",
          auth:"张三",
          userId:"444111"
          },
           { 
          id:"52554124",
          title:"阿萨德萨达大大方方*****",
          type:1,
          like:300,
          pv:300,
          updateTime:"2020-11-11",
          auth:"张三",
          userId:"444111"
          },
           { 
          id:"52554124",
          title:"b阿斯顿撒a*****",
          type:2,
          like:100,
          pv:100,
          updateTime:"2020-11-11",
          auth:"张三",
          userId:"444111"
          },
        );
    };

    getGetList();
    return {
      ...datas,
    };
  },

  components: { SourceList, Pager,Search },
});
</script>

<style lang="less">
</style>