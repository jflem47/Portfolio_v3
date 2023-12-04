<script lang="ts" setup>
import {
    RouterLink,
    RouterView
} from "vue-router";
import { lang } from './scripts/lang'
</script>

<template>
  <div class="navbar">
    <div class="nav-content">
      <div class="nav-item">
        <button @click="lang.lang = 'fr'">FR</button>
      </div>
      <div class="nav-item">
        <button @click="lang.lang = 'en'">EN</button>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>

button {
  background-color: 0;
  border-radius: 0%;
}

.navbar {
  position: fixed;
  display: flex;
  width: 100%;
  font-family: "Khula", sans-serif;
  text-align: center;
  color: black;
  white-space: nowrap;
  z-index: 9999999;
}

.nav-content {
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
}

.nav-item {
  border-radius: 10px;
}

.flex {
  display: flex;
  width: 100vw;
}
</style>
