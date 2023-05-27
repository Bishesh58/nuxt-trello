<template>
  <div class="relative">
    <button
      @click="showModal = true"
      ref="showModalButton"
      class="bg-blue-500 text-white px-4 py-2"
    >
      Show Modal
    </button>
    <transition name="slide">
      <div
        id="modal"
        v-if="showModal"
        class="absolute inset-0 flex items-center justify-center"
      >
        <div
          class="absolute w-[250px] h-fit inset-0 bg-white rounded-lg shadow-lg p-6"
        >
          <!-- Modal content -->
          <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
          <p>Modal content goes here...</p>
          <button @click="showModal = false">x</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const showModal = ref(false);
const showModalButton = ref(null);
function closeModal() {
  showModal.value = false;
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});

function handleOutsideClick(event) {
  const modalContainer = document.getElementById("modal");
  if (
    !modalContainer.contains(event.target) &&
    event.target !== showModalButton.value
  ) {
    closeModal();
  }
}
</script>

<style scoped></style>
