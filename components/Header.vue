<script setup></script>
<template>
  <header
    class="absolute top-0 w-full z-10 h-[50px] p-2 border border-slate-400 backdrop-blur-lg bg-white/50 text-white"
  >
    <div class="flex justify-between gap-2">
      <!-- left -->
      <div class="flex items-center gap-2.5">
        <div
          class="w-[36px] h-full p-1 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsApps width="22" height="22" color="white" />
        </div>
        <div
          class="h-full p-1 px-1.5 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsTrello width="22" height="22" color="white" />
          <span class="font-bold tracking-wide text-lg leading-3">Trello</span>
        </div>
        <div
          class="h-full p-1 px-1.5 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <span class="text-sm">More</span>
          <IconsArrowDown width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-md flex justify-center items-center bg-white/30 hover:bg-white/20 hover:cursor-pointer"
        >
          <IconsPlus width="22" height="22" color="white" />
        </div>
      </div>
      <div></div>
      <!-- right -->
      <div class="flex items-center gap-1">
        <div
          class="w-[36px] h-full p-1 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsSearch width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-full flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsBell class="rotate-45" width="22" height="22" color="white" />
        </div>
        <div class="w-8 h-8 rounded-full bg-white"></div>
      </div>
    </div>
  </header>
</template>
