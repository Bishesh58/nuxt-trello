<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    position="center"
    appendTo="#feed"
    class="min-w-[480px] bg-[#f1f2f4] md:w-full max-w-[800px] h-full mx-2"
  >
    <template #header>
      <h1 class="text-2xl text-gray-700 font-bold">
        header {{}}
        <p class="text-sm font-normal py-1">
          in list <span class="underline">Board 1</span>
        </p>
      </h1>
      <div
        @click="$emit('update:visible', false)"
        class="absolute top-4 right-4 hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer"
      >
        <IconsClose width="18" height="18" color="black" />
      </div>
    </template>
    <!-- #default -->
    <div class="h-full flex flex-col md:flex-row bg-[#f1f2f4] text-sm">
      <!-- right -->
      <div class="flex-grow pr-4">
        <!-- top -->
        <div class="flex"></div>

        <div class="flex gap-2">
          icon
          <div class="flex-grow">
            <h1 class="text-base font-semibold">Description</h1>
            <input
              type="text"
              placeholder="Add a more detailed description.."
              class="h-12 p-2 my-4 w-full bg-gray-200 hover:bg-gray-300 rounded-sm placeholder:text-gray-700 text-gray-700"
            />
          </div>
        </div>
        <!-- bottom -->
        <div class="flex items-center gap-2 my-2">
          icon
          <h1 class="flex-grow text-base font-semibold">Activity</h1>
          <button
            class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
          >
            Show details
          </button>
        </div>
        <div class="flex gap-2 items-center">
          <div class="h-10 w-10 rounded-full bg-green-700">
            <img src="" alt="" />
          </div>
          <input
            class="flex-grow p-2 rounded-md"
            type="text"
            placeholder="Write a comment..."
          />
        </div>
        <!-- comments -->
        <div v-for="(item, index) in 5" :key="index" class="my-2">
          <div class="flex gap-2 items-center">
            <div class="h-10 w-10 rounded-full bg-green-700 self-start">
              <img src="" alt="" />
            </div>
            <div class="flex-grow">
              <span class="font-semibold">Bishesh</span>
              <span class="px-2 inline text-xs text-gray-600 font-light"
                >8 minutes ago</span
              >
              <input
                class="flex-grow p-2 my-1.5 rounded-md w-full"
                type="text"
                placeholder="Write a comment..."
              />
              <div class="flex gap-2">
                face <button class="underline">Edit</button>
                <button class="underline">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- left -->
      <div class="grid grid-cols-2 gap-2 md:w-[200px] md:grid-cols-1 h-fit">
        <div
          class="px-2 flex justify-between items-center gap-2rounded-sm col-span-2 md:col-span-1"
        >
          <span class="font-semibold">Suggested</span>

          <div
            class="h-6 w-6 p-1 rounded-md flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            <IconsSettings width="18" height="18" color="#374151" />
          </div>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Join</span>
        </div>
        <div class="p-2 col-span-2 md:col-span-1">
          <span>Add to card</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Members</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Labels</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Checklist</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Dates</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Attachment</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Cover</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Custom Fields</span>
        </div>
        <div class="p-2 col-span-2 md:col-span-1">
          <span>Power-Ups</span>
        </div>
        <div class="hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm">
          <IconsUser width="18" height="18" color="#374151" />
          <span>Add Power-Ups</span>
        </div>
        <div class="p-2 col-span-2 md:col-span-1">
          <span>Actions</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsArrowRight width="18" height="18" color="#374151" />
          <span>Move</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsCopy width="18" height="18" color="#374151" />
          <span>Copy</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
          <span>Make template</span>
        </div>
        <hr class="p-2 col-span-2 md:col-span-1" />

        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsArchive width="18" height="18" color="#374151" />
          <span>Archive</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsShare width="18" height="18" color="#374151" />
          <span>Share</span>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
const visible = ref(false);
</script>

<style scoped></style>
