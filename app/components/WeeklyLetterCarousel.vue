<script setup lang="ts">
defineProps<{
  date: string,
  images: string[],
}>();
</script>

<template>
  <article class="rounded-lg shadow-sm text-right relative">
    <p class="absolute bottom-4 end-4 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-md z-10">{{
        date
      }}</p>
    <Carousel>
      <CarouselContent>
        <CarouselItem v-for="(image, index) in images">
          <img :src="useAsset(image)" :alt="`Weekly Letter Image ${index + 1}`"
               class="aspect-video w-full rounded-t-lg object-cover">
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious v-if="images.length > 1" variant="outline"/>
      <CarouselNext v-if="images.length > 1" variant="outline"/>
    </Carousel>
  </article>
</template>
