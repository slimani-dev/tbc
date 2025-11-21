<script setup lang="ts">
defineProps<{
  date: string,
  cover: string,
}>();
</script>

<template>
  <article class="rounded-lg shadow-sm text-right relative">
    <p class="absolute bottom-4 end-4 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-md">{{ date }}</p>

    <img :src="useAsset(cover)" alt="" class="aspect-video w-full rounded-t-lg object-cover">
  </article>
</template>
