<script setup>

const { data } = await useAsyncData(() => queryCollection('weeklyLetter').all())

console.log(data.value)
</script>


<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl font-bold mb-2 text-primary-DEFAULT text-center">
      الرسالة الاسبوعية
    </h2>
    <p class="text-center mb-6">
      مع إشراقة كل أسبوع، ستجدون رسالتَنا الأسبوعية نبراسًا يوجِّه العمل، ويبعث في الميدان روحًا من التفاؤل
    </p>
    <LazyClientOnly>
      <div class="flex flex-col gap-4">
        <NuxtLink v-for="post in data"
                  :key="post.id"
                  :to="{ name: 'news-slug', params: { slug: post.stem } }"
        >
          <WeeklyLetterPost
              :cover="post.cover"
              :date="post.date">
            <p> {{ post.description }} </p>
          </WeeklyLetterPost>
        </NuxtLink>
      </div>
    </LazyClientOnly>
  </div>
</template>
