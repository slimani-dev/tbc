<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('weeklyLetter').order('date', 'DESC').first())

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
      <div class="space-y-6">
        <WeeklyLetterCarousel
              :images="data.images"
              :date="data.date">
          </WeeklyLetterCarousel>
      </div>
    </LazyClientOnly>

    <div class="flex flex-wrap items-center justify-center mt-6 text-muted underline">
      <NuxtLink to="/weeklyLetter" class="nav-button" active-class="nav-button-active">
        رسائل الاسابيع الماضية
      </NuxtLink>
    </div>
  </div>

  <!--
  <div class="space-y-4 px-2 sm:px-0 animate-fade-in">
      <LinkCard
        href="#"
        icon='<path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>'
        icon-bg-color="#3b82f6"
        :is-svg="true"
        title="تابعونا على فيسبوك"
        subtitle="اخر الاخبار والنشاطات"
      />
      <LinkCard
        href="#"
        icon="school"
        icon-bg-color="#10b981"
        title="الموقع الرسمي للمدرسة"
        subtitle="معلومات التسجيل والقبول"
      />
      <LinkCard
        href="#"
        icon="photo_library"
        icon-bg-color="#8b5cf6"
        title="معرض الصور"
        subtitle="شاهدوا لحظاتنا المميزة"
      />
       <LinkCard
        href="#"
        icon="event"
        icon-bg-color="#f59e0b"
        title="الرزنامة المدرسية"
        subtitle="مواعيد مهمة وامتحانات"
      />
    </div>
  -->

</template>

