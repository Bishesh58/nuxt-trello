<script setup></script>
<template>
  <div class="h-screen bg-hero bg-no-repeat bg-cover">
    <Header />
    <!-- bottom container -->
    <div class="flex h-[calc(100vh-50px)]">
      <SideBar />
      <div class="flex-grow overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
