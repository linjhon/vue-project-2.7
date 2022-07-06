<template>
  <div>
    <h1>This is an counter page by pinia</h1>
    <h3>counterStore</h3>
    <pre>
      {{ counterStore }}
    </pre>
    <div>
      <input v-model="counterStore.counter" name="" id="" />
      <a class="btn" @click="handleClick">increment</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const handleClick = () => counterStore.increment();
</script>

<style>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

input {
  outline: none;
  display: inline-block;
  border: 0;
  padding: 7px 7px;
}

.btn {
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
}
</style>
