<script setup>
import { onUpdated, ref } from 'vue'
import Child from './Child.vue'

let count = 0;
let lastStart = 0;

const components = ref([]);

const loadSingleContent = () => {
  lastStart = performance.now();
  components.value.push(++count)
}

const loadContent = () => {
  lastStart = performance.now();

  for (let step = 0; step < 10_000; step++) {
      components.value.push(++count);
  }
}

const removeSingleContent = () => {
  lastStart = performance.now();
  components.value.splice(Math.floor(Math.random() * 10_000), 1);
}

const removeContent = () => {
  lastStart = performance.now();
  components.value = [];
}


onUpdated(() => {
  console.log('Last action took: ' + (performance.now() - lastStart));
});
</script>

<template>
  <button type="button" @click="loadSingleContent">Load single component</button>
  <button type="button" @click="loadContent">Load 10,000 components</button>
  <button type="button" @click="removeSingleContent">Remove single component</button>
  <button type="button" @click="removeContent">Remove 10,000 components</button>

  <div v-for="(i, index) in components" :key="index">
    <Child></Child>
  </div>

</template>

<style scoped>
</style>
