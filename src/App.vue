<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from '@/components/Header.vue'
import { onBeforeMount } from "@vue/runtime-core";
import store from "./store";

onBeforeMount(() => {
  store.commit("loadPosts");
});

</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
