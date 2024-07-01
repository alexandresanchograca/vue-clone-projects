<template>
  <div class="news-detail-container">
    <div class="news-title">
      <GreenPill :hollow="true"/>
      <h1>{{ newsDetails.title }}</h1>
      <div class="author-note">
        <IconBar/>
      </div>
    </div>
    <div class="news-content">
      <p>{{ newsDetails.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const data = await $fetch<Article>(`/api/news${route.fullPath}`);

const newsDetails = computed(() => {
  return data;
})

</script>

<style scoped>

</style>