<script setup lang="ts">
defineProps<{
  title: string,
  date: string,
  cover: string,
}>();
</script>

<template>
  <article class="bg-card-light dark:bg-card-dark rounded-lg shadow-sm text-right">
    <img :src="useAsset(cover)" alt="" class="aspect-video w-full rounded-t-lg object-cover">

    <div class="p-6 ">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-sm text-muted-foreground mt-1 mb-3">{{ date }}</p>
      <p class="leading-relaxed">
        <slot/>
      </p>
    </div>
  </article>
</template>
