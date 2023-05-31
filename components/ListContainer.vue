<template>
  <div class="bg-[#f1f2f4] w-[300px] h-fit rounded-lg p-2 text-gray-700">
    <draggable
      v-model="myBoardLists"
      group="board"
      ghostClass="ghost"
      :animation="200"
      :itemKey="props.title"
    >
      <template #header>
        <div class="flex items-center">
          <input
            type="text"
            v-model="title"
            class="py-1 px-2.5 mb-1 bg-transparent flex-grow"
          />

          <div
            class="h-8 w-8 p-1 mx-1 rounded-md flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer"
          >
            <IconsMore width="18" height="18" color="black" />
          </div>
        </div>
      </template>
      <template #item="{ element }">
        <div
          @click="openCardModal(element)"
          class="bg-white my-2 py-2 px-2.5 rounded-lg border shadow-sm"
          :key="element.id"
        >
          {{ element.name }}
        </div>
      </template>
      <template #footer>
        <div
          id="cardModal"
          v-if="cardInputModal"
          class="bg-white p-2 rounded-md"
        >
          <input
            ref="cardInputRef"
            v-model="cardInput"
            type="text"
            placeholder="Enter a card title"
            class="w-full p-2 mb-1 outline-none text-sm placeholder:text-gray-800 rounded-md ring-2 ring-blue-700 ring-inset"
          />
          <button
            class="text-white bg-blue-500 p-2 text-xs rounded-md hover:cursor-pointer"
            type="submit"
            @click="addNewCard"
          >
            Add Card
          </button>
          <IconsClose
            @click="cardInputModal = false"
            width="30"
            height="30"
            color="gray"
            class="inline m-2 p-1 hover:cursor-pointer"
          />
        </div>
        <div v-show="!cardInputModal" class="flex items-center">
          <button
            ref="modalButtonRef"
            @click="cardInputModal = true"
            class="flex-1 text-left py-1 px-2.5 hover:bg-gray-300 rounded-md"
          >
            <IconsPlus width="20" height="20" color="gray" class="inline" />
            Add a card
          </button>
        </div>
      </template>
    </draggable>
    <!-- card dialog -->
    <Dialog
      v-model:visible="cardModalVisible"
      modal
      :draggable="false"
      :closable="false"
      position="center"
      appendTo="#feed"
      class="min-w-[480px] bg-[#f1f2f4] md:w-full max-w-[800px] h-full"
    >
      <template #header>
        <h1 class="text-2xl text-gray-700 font-bold">
          {{ cardHeader }}
          <p class="text-sm font-normal py-1">in list Board 1</p>
        </h1>
        <div
          @click="cardModalVisible = false"
          class="absolute top-4 right-4 hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer"
        >
          <IconsClose width="18" height="18" color="black" />
        </div>
      </template>
      <!-- #default -->
      <CardDetail />
    </Dialog>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
const myBoardLists = ref([]);
const title = ref(props.title);
const cardInputModal = ref(false);
const modalButtonRef = ref(null);
const cardInputRef = ref(null);
const cardInput = ref("");
const cardHeader = ref("");

const cardModalVisible = ref(false);

const closeModal = () => {
  cardInputModal.value = false;
};

onMounted(() => {
  document.addEventListener("click", outSideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", outSideClick);
});

const outSideClick = (ev) => {
  const cardModal = document.getElementById("cardModal");
  if (
    cardModal &&
    !cardModal.contains(ev.target) &&
    ev.target !== modalButtonRef.value
  ) {
    closeModal();
  }
};

const addNewCard = () => {
  if (cardInput.value === "") {
    cardInputRef.value.focus();
    return;
  }
  const newCard = { id: 1, name: cardInput.value };
  myBoardLists.value.push(newCard);
  cardInput.value = "";
  closeModal();
};

watch(cardInputModal, (newValue) => {
  if (newValue) {
    nextTick(() => {
      cardInputRef.value.focus();
    });
  }
});

const openCardModal = (element) => {
  cardHeader.value = element.name;
  cardModalVisible.value = true;
};
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #cfd4d4;
}
</style>
