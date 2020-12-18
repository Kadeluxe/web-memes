<template>
  <main>
    <h1>Calculator</h1>

    <input v-model.number="a" type="number"/>
    <input v-model.number="b" type="number"/>
    <input v-model="result" readonly type="number"/>

    <button @click="sum">sum</button>
    <button @click="sub">sub</button>
    <button @click="mul">mul</button>
    <button @click="div">div</button>
  </main>
</template>

<script lang="ts">
import {server} from "@frontend/server";
import {ref} from "vue";
import {IRecallException} from "@recall/shared/types";

export default {
  setup() {
    const a = ref(0);
    const b = ref(0);
    const result = ref(0);

    return {
      a,
      b,
      result,

      async sum() {
        result.value = await server.calculator.sum(a.value, b.value);
      },
      async sub() {
        result.value = await server.calculator.sub(a.value, b.value);
      },
      async mul() {
        result.value = await server.calculator.mul(a.value, b.value);
      },
      async div() {
        try {
          result.value = await server.calculator.div(a.value, b.value);
        } catch ($e) {
          const e = <IRecallException>$e;
          if (e.isNetworkError) {
            alert("Network error");
          } else if (e.isRemoteError) {
            alert(`Remote error: ${e.message}`);
          }
        }
      },
    };
  },
};
</script>

<style lang="scss">

</style>