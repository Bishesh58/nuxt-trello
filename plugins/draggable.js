import draggable from "vuedraggable";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("draggable", draggable);
  // draggable: Error on nuxt version 3.5.0
});
