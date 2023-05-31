<script setup></script>
<template>
  <header
    class="w-full z-10 h-[50px] p-2 border border-slate-400 backdrop-blur-lg bg-white/50 text-white"
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
          class="h-full p-1 px-1.5 rounded-md hidden sm:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <span class="text-sm">Workspaces</span>
          <IconsArrowDown width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="h-full p-1 px-1.5 rounded-md hidden md:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <span class="text-sm">Recent</span>
          <IconsArrowDown width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="h-full p-1 px-1.5 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <span class="text-sm">More</span>
          <IconsArrowDown width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-md hidden xl:flex justify-center items-center bg-white/30 hover:bg-white/20 hover:cursor-pointer"
        >
          <IconsPlus width="22" height="22" color="white" />
        </div>
        <div
          class="h-full px-4 rounded-md flex justify-center items-center bg-white/30 hover:bg-white/40 hover:cursor-pointer"
        >
          <span class="text-sm">Create</span>
        </div>
      </div>
      <div></div>
      <!-- right -->
      <div class="flex items-center gap-1">
        <div
          class="w-[200px] h-full p-1 mr-2 border rounded-md hidden lg:flex justify-between gap-1 items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsSearch width="20" height="20" color="white" class="mt-0.5" />
          <input
            type="text"
            placeholder="Search"
            class="outline-none bg-transparent placeholder:text-white font-light text-sm leading-3 flex-grow"
          />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-md lg:hidden flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsSearch width="22" height="22" color="white" class="mt-0.5" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-full flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsBell class="rotate-45" width="22" height="22" color="white" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-full hidden md:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsInformation width="22" height="22" color="white" />
        </div>
        <div
          class="w-[36px] h-full p-1 rounded-full hidden md:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsTheme width="22" height="22" color="white" />
        </div>
        <div class="w-8 h-8 p-1 rounded-full bg-transparent hover:bg-white/30">
          <img
            src="~/assets/mountain.jpeg"
            alt="avatar"
            class="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>
