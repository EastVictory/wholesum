import { EditorDetailsType } from "@/types/Editor";

export const useEditorSTore = () =>
  defineStore("editor", () => {
    const configuration = ref<EditorDetailsType>({
      title: "",
      category: "",
      label: "",
      duration: 0,
      break: 0,
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
