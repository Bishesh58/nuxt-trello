<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    
    position="center"
    appendTo="#feed"
    class="min-w-[480px] bg-[#f1f2f4] md:w-full max-w-[800px] h-full"
  >
    <template #header>
      <h1 class="text-2xl text-gray-700 font-bold">
        header {{}}
        <p class="text-sm font-normal py-1">in list Board 1</p>
      </h1>
      <div
        @click="visible"
        class="absolute top-4 right-4 hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer"
      >
        <IconsClose width="18" height="18" color="black" />
      </div>
    </template>
    <!-- #default -->
    <div class="flex">
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
      <div class="w-[200px] bg-slate-300">left</div>
    </div>
  </Dialog>
</template>

<script setup>
const visible = ref(false);
</script>

<style scoped></style>
