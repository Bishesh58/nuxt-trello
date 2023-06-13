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
          @click="openCardDetail(element)"
          class="bg-white my-2 p-0.5 rounded-lg border shadow-sm hover:bg-[#f1f2f4] hover:border border-gray-300 group relative"
          :key="element.id"
        >
          <p class="pl-2 min-h-[32px] flex items-center w-full">
            {{ element.name }}
          </p>

          <div
            @click.stop="openCardEditor(element)"
            class="absolute top-0.5 right-0.5 w-[32px] h-[32px] p-1.5 rounded-md hidden group-hover:flex justify-center items-center hover:cursor-pointer hover:bg-gray-300"
          >
            <IconsPencil color="gray" />
          </div>
          <!-- card editor -->
          <div
            v-show="cardEditorModal && element.id === cardEditorElementId"
            @click.stop
            ref="cardEditorRef"
            class="bg-gray-900/50 rounded-lg absolute top-0 right-0 left-0 bottom-0 z-50 min-h-[260px]"
          >
            <textarea
              type="text"
              autofocus
              v-model="cardEditor"
              class="w-full h-full p-2 rounded-lg min-h-[100px] outline-none bg-white"
            />
            <button
              @click.stop="cardEditorModal = false"
              class="bg-blue-400 text-white rounded-md py-2 px-6"
            >
              Save
            </button>
          </div>
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
    <!-- card detail modal -->
    <CardDetail
      :visible="showCardDetail"
      header="This is my header"
      @update:visible="showCardDetail = $event"
    />
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
const props = defineProps(["title"]);

const myBoardLists = ref([]);
const title = ref(props.title);
const cardInputModal = ref(false);
const modalButtonRef = ref(null);
const cardInputRef = ref(null);
const cardInput = ref("");
const cardHeader = ref("");
const cardEditorModal = ref(false);
const cardEditor = ref("");
const showCardDetail = ref(false);
const cardEditorElementId = ref(null);
const cardEditorRef = ref(null);

watchEffect(() => {
  const handleClickOutsideModal = (event) => {
    if (cardEditorRef.value && !cardEditorRef.value.contains(event.target)) {
      cardEditorModal.value = false;
    }
  };

  document.addEventListener("mousedown", handleClickOutsideModal);

  // Cleanup the event listener when the component is unmounted
  return () => {
    document.removeEventListener("mousedown", handleClickOutsideModal);
  };
});
const openCardEditor = (element) => {
  cardEditorModal.value = true;
  cardEditor.value = element.name;
  cardEditorElementId.value = element.id;
};

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

  const newCard = { id: uuidv4(), name: cardInput.value };
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

const openCardDetail = (element) => {
  cardHeader.value = element.name;
  showCardDetail.value = true;
};
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #cfd4d4;
}
</style>
