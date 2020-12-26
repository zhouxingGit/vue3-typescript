<template>
  <div>
    <span class="loginOut" v-if="token" @click="loginout"> 退出登录 </span>
    <span class="login" v-else @click="login"> 登录 </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from "vue";
import {loginData} from "@/interface"

export default defineComponent({
  setup() {
    let token = localStorage.getItem("token");

    //退出登录
    const loginout = ()=>{
      localStorage.clear();
      datas.token.value = "";
    };

    //登录
    const login = ()=>{
      localStorage.setItem("token","111111");
       datas.token.value = "111111";
    };

    const data:loginData = reactive({
        token,
        loginout,
        login
    })

    const datas = toRefs(data);

    return {
      ...datas
    }
  },
});
</script>

<style lang="less">
.loginOut,.login {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #fb7299;
  border-radius: 2px;
  margin-left: 14px;
}

@media (max-width:1200px) {
  .loginOut,.login{
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }
}
</style>