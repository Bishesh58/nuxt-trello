<script setup></script>
<template>
  <div
    class="w-60 border border-slate-400 backdrop-blur-md bg-white/30 flex flex-col justify-between text-white"
  >
    <!-- top -->
    <div class="border-b border-slate-400 py-3 px-2 flex">
      <div
        class="w-8 h-8 rounded-[4px] bg-gradient-to-r from-violet-500 to-fuchsia-400 flex justify-center hover:bg-gradient-to-r"
      >
        <p class="font-bold text-2xl">B</p>
      </div>
      <div class="flex-grow px-2">
        <h1 class="font-semibold text-[14px]">bishesh's workspaces</h1>
        <p class="text-[12px]">Free</p>
      </div>
      <div
        class="h-6 w-6 p-1 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
      >
        <IconsArrowLeft width="18" height="18" color="white" />
      </div>
    </div>
    <!-- middle -->
    <div class="overflow-auto flex-grow">
      <NuxtLink
        to="/"
        class="w-full h-8 p-4 hover:bg-white/30 hover:cursor-pointer flex gap-2 items-center"
      >
        <IconsTrello width="18" height="18" color="white" />
        <p class="flex-grow">Boards</p>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="w-full h-8 p-4 hover:bg-white/30 hover:cursor-pointer flex gap-2 items-center"
      >
        <IconsUser width="18" height="18" color="white" />
        <p class="flex-grow">Members</p>
        <IconsPlus width="18" height="18" color="white" />
      </NuxtLink>
      <NuxtLink
        to="/"
        class="w-full h-8 p-4 hover:bg-white/30 hover:cursor-pointer flex gap-2 items-center"
      >
        <IconsSettings width="18" height="18" color="white" />
        <p class="flex-grow">Workspace settings</p>
        <IconsArrowDown width="18" height="18" color="white" />
      </NuxtLink>
      <h1 class="p-4">Workspace views</h1>
      <NuxtLink
        to="/"
        class="w-full h-8 p-4 group hover:bg-white/30 hover:cursor-pointer flex gap-2 items-center"
      >
        <IconsTable width="18" height="18" color="white" />
        <p class="flex-grow italic">Table</p>
        <div
          class="h-6 w-6 p-1 rounded-md hidden group-hover:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsMore width="18" height="18" color="white" />
        </div>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="w-full h-8 p-4 group hover:bg-white/30 hover:cursor-pointer flex gap-2 items-center"
      >
        <IconsCalender width="18" height="18" color="white" />
        <p class="flex-grow italic">Calender</p>
        <div
          class="h-6 w-6 p-1 rounded-md hidden group-hover:flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsMore width="18" height="18" color="white" />
        </div>
      </NuxtLink>
      <div class="w-full h-8 p-4 flex gap-2 items-center">
        <p class="flex-grow">Your boards</p>
        <div
          class="h-6 w-6 p-1 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsMore width="18" height="18" color="white" />
        </div>
        <div
          class="h-6 w-6 p-1 rounded-md flex justify-center items-center hover:bg-white/30 hover:cursor-pointer"
        >
          <IconsPlus width="18" height="18" color="white" />
        </div>
      </div>

      <NuxtLink
        to="/"
        class="w-full h-8 p-4 hover:bg-white/30 hover:cursor-pointer flex gap-1.5 items-center"
      >
        <img
          src="~/assets/hero.png"
          alt="avatar"
          class="w-[24px] h-[20px] rounded-[4px] object-cover"
        />
        <p class="flex-grow">My Board</p>
        <IconsFavourite
          width="18"
          height="18"
          color="white"
          class="hover:scale-120"
        />
      </NuxtLink>
    </div>

    <!-- bottom -->
    <div class="border-t border-slate-400 py-3 px-2">
      <button
        class="w-full p-1 font-[14px] rounded-[4px] text-white bg-gradient-to-r from-violet-500 to-fuchsia-400 flex items-center hover:bg-gradient-to-r hover:from-indigo-900 hover:to-sky-500"
      >
        <IconsBag width="18" height="18" color="white" class="mx-2" />
        Try Premium free
      </button>
    </div>
  </div>
</template>
