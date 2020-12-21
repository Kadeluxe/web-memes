<template>
  <div>
    <h1>Create workspace</h1>
    <input v-model="name" type="text"/>
    <button @click="create">Create</button>
    <button @click="getAll">getAll</button>
  </div>
</template>

<script lang="ts">
import {ref} from "@vue/reactivity";
import {server} from "@frontend/server";

export default {
  setup() {
    const name = ref("");

    return {
      name,
      create() {
        server.workspaces.createWorkspace(name.value);
      },
      getAll() {
        server.workspaces.getWorkspaces();
      },
    };
  },
};
</script>

<style lang="scss">

</style>