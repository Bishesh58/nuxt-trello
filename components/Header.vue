<script setup></script>
<template>
  <header
    class="absolute top-0 w-full z-10 h-[50px] p-2 border border-slate-400 backdrop-blur-lg bg-white/50 text-white"
  >
    <div class="flex justify-between">
      <!-- left -->
      <div class="flex items-center">
        <Icon name="ion:apps" color="white" size="20" />
        <Icon name="ci:trello" color="white" size="22" />
        <span class="font-bold tracking-wide text-lg">Trello</span>
        <button>More</button>
        <Icon name="material-symbols:keyboard-arrow-down" size="22" />
        <Icon name="material-symbols:add-rounded" color="white" size="28" />
      </div>
      <div>mid</div>
      <!-- right -->
      <div class="flex items-center">
        <Icon
          name="mdi:magnify"
          size="23"
          class="mt-1 mr-1 w-8 rounded-sm hover:bg-white/30"
        />
        <Icon name="mdi:bell-outline" size="22" class="rotate-45 w-8 mr-1" />
        <div class="w-8 h-8 rounded-full bg-white"></div>
      </div>
    </div>
  </header>
</template>
