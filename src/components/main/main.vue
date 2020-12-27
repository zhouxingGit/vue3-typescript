<template>
  <v-header />
  <div id="content">
    <Suspense>
      <template #default>
        <router-view class="wrap"/>
      </template>
      <template #fallback>
        <h3>loading...</h3>
      </template>
    </Suspense>

    <a-back-top />
  </div>

  <v-footer />
</template>

<script lang="ts">
import VHeader from "@/components/header/header.vue";
import VFooter from "@/components/footer/footer.vue";
export default {
  components: { VHeader, VFooter },
};
</script>