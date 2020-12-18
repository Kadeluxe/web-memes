<template>
  <router-view v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component"/>
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </router-view>
</template>

<script lang="ts">
export default {
  setup() {

  },
};
</script>

<style lang="scss" scoped>

</style>