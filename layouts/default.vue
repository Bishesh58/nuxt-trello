<script setup></script>
<template>
  <div class="h-screen bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat bg-cover">
    <Header />

    <SideBar />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
