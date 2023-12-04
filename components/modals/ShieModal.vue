<script setup lang="ts">
import { onMounted, Ref } from "vue";

const myModl = ref(null);
const modal: Ref<HTMLDivElement | null> = ref(null);
const handleClick = () => {
  modal.value?.click();
};

onMounted(async () => {
  const { Modal, initTE } = await import("tw-elements");
  initTE({ Modal });
  const myModalEl = document.getElementById("exampleModal");
  myModl.value = new Modal(myModalEl);
});

defineExpose({ handleClick });

const emits = defineEmits<{
  (e: "yes-action", value: boolean): void;
}>();
const hClick = () => {
  myModl.value?.hide();
  emits("yes-action", true);
};
</script>

<template>
  <section>
    <!-- Button trigger modal -->
    <button
      ref="modal"
      type="button"
      class="hidden"
      data-te-toggle="modal"
      data-te-target="#exampleModal"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      id="exampleModal"
      data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[37.25rem]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-[#6363D9] bg-clip-padding text-current shadow-lg outline-none"
        >
          <!--Modal body-->
          <div class="relative flex-auto p-4" data-te-modal-body-ref>
            <p class="text-[1.125rem] text-white">
              Are you sure you want to delete this task? <br />
              This action can not be undone
            </p>
          </div>

          <!--Modal footer-->
          <div
            class="flex flex-shrink-0 flex-wrap items-center rounded-b-md p-4 bg-[#F2F3F4] gap-4 justify-between"
          >
            <button
              type="button"
              class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:bg-crayola h-[1.5rem] items-center inline-flex justify-center whitespace-nowrap"
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <span class="h-[1rem]"> Close </span>
            </button>
            <button
              type="button"
              class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:bg-crayola h-[1.5rem] items-center inline-flex justify-center whitespace-nowrap"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="hClick"
            >
              <span class="h-[1rem]"> YES I’M SURE </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
