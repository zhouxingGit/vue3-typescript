<template>
  <div id="header">
      <div class="nav wrap">
        <div class="nav-link">
          <header-nav/>
        </div>
        <div class="nav-user">
          <header-user/>
        </div>
      </div>
  </div>
</template>
<script lang="ts">
import HeaderNav from "./components/header-nav.vue"
import HeaderUser from "./components/header-user.vue"
export default {
  components:{HeaderNav,HeaderUser}
}
</script>
<style lang="less" scoped>
  @import "./index.less";
</style>