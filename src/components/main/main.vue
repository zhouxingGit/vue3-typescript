<template>
  <v-header />
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <h3>loading...</h3>
    </template>
  </Suspense>
  <v-footer />
</template>

<script lang="ts">
import VHeader from "@/components/header/index.vue";
import VFooter from "@/components/footer/index.vue";
export default {
  components: { VHeader, VFooter },
};
</script>
