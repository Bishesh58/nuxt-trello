<script setup></script>
<template>
  <div
    class="w-60 absolute top-[50px] left-0 h-[96vh] border border-slate-400 backdrop-blur-md bg-white/30 flex flex-col justify-between"
  >
    <!-- top -->
    <div class="border-b border-slate-400 p-4">
      icon
      <div>
        <h1>bishesh's workspaces</h1>
        <p>Free</p>
      </div>
      icon
    </div>
    <!-- middle -->
    <div class="overflow-auto flex-grow">
      <ButtonLink />
      <ButtonLink />
      <ButtonLink />
      <h1 class="p-4">Workspace views</h1>
      <ButtonLink />
      <ButtonLink />
      <button class="p-4">Your boards</button>
      <ButtonLink />
      <ButtonLink />
      <ButtonLink />
    </div>

    <!-- bottom -->
    <div class="border-t border-slate-400">
      <button class="p-4">Try Premium free</button>
    </div>
  </div>
</template>
