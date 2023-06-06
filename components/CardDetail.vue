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
        <p class="text-sm font-normal py-1">in list Board 1</p>
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
      <div class="flex-grow">
        <!-- top -->
        <div class="flex"></div>
        <div>
          <p>Notifications</p>
          <div>icon watching icon</div>
        </div>
        <!-- middle -->
        <div>
          <input type="text" placeholder="Add a more detailed description.." />
          icon
          <h1>Description</h1>
        </div>
        <!-- bottom -->
        <div>
          icon
          <h1>Acitvity</h1>
          <button>Show details/ hide details</button>
          <div>img <input type="text" placeholder="Write a comment..." /></div>
          <!-- lists -->
          <div>
            img <input type="text" placeholder="test 1" /> icon
            <button>edit</button> <button>delete</button>
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
          <IconsUser width="18" height="18" color="#374151" />
          <span>Move</span>
        </div>
        <div
          class="bg-gray-200 hover:bg-gray-300 p-2 flex gap-2 items-center rounded-sm"
        >
          <IconsUser width="18" height="18" color="#374151" />
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
