import type { EditorDetailsType } from "@/types/Editor";

export const useEditorStore = defineStore("editor", () => {
  const configuration = ref<EditorDetailsType>({
    title: "",
    category: "",
    label: "",
    duration: 0,
    break: 0,
    onTimerEnd: "",
  });

  const saveEditor = (details: EditorDetailsType) => {
    configuration.value = {
      ...details,
    };
  };

  return {
    configuration,
    saveEditor,
  };
});
