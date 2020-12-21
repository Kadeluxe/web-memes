<template>
  <router-view/>
</template>

<script lang="ts">
import {useProfileStore} from "@frontend/stores/ProfileStore";

export default {
  setup() {
    const profileStore = useProfileStore();
    profileStore.getMe();
  },
};
</script>

<style lang="scss" scoped>

</style>