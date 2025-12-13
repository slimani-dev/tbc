<script setup>

const { data } = await useAsyncData(() => queryCollection('weeklyLetter').order('date', 'DESC').all())

console.log(data.value)
</script>


<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl font-bold mb-2 text-primary-DEFAULT text-center">الرسالة الاسبوعية</h2>
    <p
      class="text-center mb-6"
    >مع إشراقة كل أسبوع، ستجدون رسالتَنا الأسبوعية نبراسًا يوجِّه العمل، ويبعث في الميدان روحًا من التفاؤل</p>
    <LazyClientOnly>
      <div class="flex flex-col gap-8">
        <WeeklyLetterCarousel
          v-for="post in data"
          :key="post.id"
          :images="post.images"
          :date="post.date"
        ></WeeklyLetterCarousel>
      </div>
    </LazyClientOnly>
  </div>
</template>
