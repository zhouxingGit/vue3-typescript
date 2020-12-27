<template>
  <v-header />
  <div class="wrap">
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <h3>loading...</h3>
      </template>
    </Suspense>
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