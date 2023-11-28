<script setup lang="ts">
import { onMounted } from "vue";
type Position = "dropup" | "dropend" | "dropstart" | "";
type AutoClose = "true" | "false hide" | "inside" | "outside";
type Offset = [number, number];
withDefaults(
  defineProps<{
    id?: string;
    buttonClass?: string;
    optionClass?: string;
    offset?: Offset;
    position?: Position;
    autoClose?: AutoClose;
  }>(),
  {
    id: "",
    offset: () => [0, 0],
    buttonClass: "",
    optionClass: "",
    autoClose: "outside",
    position: "dropstart",
  }
);

onMounted(async () => {
  const { Dropdown, initTE } = await import("tw-elements");
  initTE({ Dropdown });
});
</script>

<template>
  <div
    class="relative"
    data-te-dropdown-ref
    :data-te-dropdown-position="position"
  >
    <button
      id="dropdownMenuButton1"
      :class="`transition duration-150 ease-in-out ${buttonClass}`"
      type="button"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="light"
      :data-te-auto-close="autoClose"
      :data-te-offset="offset"
    >
      <slot></slot>
    </button>

    <div
      :class="`absolute z-[1000] float-left m-0 px-4 py-7 hidden min-w-max overflow-hidden rounded border-2 border-[#87848A] bg-white bg-clip-padding [&[data-te-dropdown-show]]:block`"
      aria-labelledby="dropdownMenuButton1"
      data-te-dropdown-menu-ref
    >
      <slot name="options"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
