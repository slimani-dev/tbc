<script setup lang="ts">
defineProps<{
  image: string,
  title: string,
  description: string,
}>();
</script>

<template>
  <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img :src="useAsset(image)" :alt="title" class="w-full h-40 object-cover">
    <div class="p-4 text-right">
      <h3 class="text-lg font-bold text-text-light dark:text-text-dark">{{ title }}</h3>
      <p class="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">{{ description }}</p>
    </div>
  </div>
</template>


