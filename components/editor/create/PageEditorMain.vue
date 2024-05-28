<script setup lang="ts">
import { Editor, EditorContent } from "@tiptap/vue-3";
import TTable from "@tiptap/extension-table";
import TTableCell from "@tiptap/extension-table-cell";
import TTableHeader from "@tiptap/extension-table-header";
import TTableRow from "@tiptap/extension-table-row";
import TStarterKit from "@tiptap/starter-kit";
import TTaskItem from "@tiptap/extension-task-item";
import TTaskList from "@tiptap/extension-task-list";
import TImage from "@tiptap/extension-image";
import TPlaceholder from "@tiptap/extension-placeholder";
import TLink from "@tiptap/extension-link";

const editor = ref();
const fontSize = ref(12);

const CustomTableCell = TTableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [
      TStarterKit,
      TTaskList,
      TTaskItem.configure({
        nested: true,
      }),
      TImage.configure({
        allowBase64: true,
      }),
      TTable.configure({
        resizable: true,
      }),
      TTableRow,
      TTableHeader,
      CustomTableCell,
      TPlaceholder.configure({
        placeholder: "Let’s rock and roll..",
      }),
      TLink.configure({
        openOnClick: false,
      }),
    ],
  });
});

const addImage = () => {
  const url = window.prompt("URL");

  if (url) {
    editor.value?.chain().focus().setImage({ src: url }).run();
  }
};

const setLink = () => {
  const previousUrl = editor.value?.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.value?.chain().focus().extendMarkRange("link").unsetLink().run();

    return;
  }

  // update link
  editor.value
    ?.chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run();
};
</script>

<template>
  <section
    class="bg-white min-h-[80vh] flex-1 h-full wholesum-page-editor flex flex-col"
  >
    <div class="border-b border-[#CCCCCC]">
      <section
        class="max-w-[90rem] mx-auto flex justify-between items-center pt-[2.125rem] pb-[1.5rem] px-12"
      >
        <div class="flex gap-12 items-center">
          <button class="p-2">
            <nuxt-icon name="restart" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="stop-2" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="duo-view" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="trio-view" filled />
          </button>
        </div>
        <div class="editor-toolbar">
          <button
            class="editor-option"
            @click="editor.chain().focus().setHardBreak().run()"
          >
            <nuxt-icon name="toolbar-text" filled class="h-4 w-4" />
          </button>
          <button
            class="editor-option"
            :class="{ active: editor?.isActive('taskList') }"
            @click="editor?.chain().focus().toggleTaskList().run()"
          >
            <nuxt-icon name="toolbar-checkbox" filled class="h-4 w-4" />
          </button>
          <button
            class="editor-option"
            :class="{ active: editor?.isActive('bulletList') }"
            @click="editor?.chain().focus().toggleBulletList().run()"
          >
            <nuxt-icon name="toolbar-radio" filled class="h-4 w-4" />
          </button>
          <button class="editor-option" @click="addImage">
            <nuxt-icon name="toolbar-image" filled class="h-4 w-4" />
          </button>
          <button class="editor-option" @click="setLink">
            <nuxt-icon name="toolbar-link" filled class="h-4 w-4" />
          </button>
          <button
            v-if="!editor?.can().deleteTable()"
            class="editor-option"
            @click="
              editor
                ?.chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            "
          >
            <nuxt-icon name="toolbar-table" filled class="h-4 w-4" />
          </button>
          <button
            v-else
            class="editor-option active"
            @click="editor?.chain().focus().deleteTable().run()"
          >
            <nuxt-icon name="toolbar-table" filled class="h-4 w-4" />
          </button>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex gap-1 items-center">
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize -= 1"
            >
              -
            </button>
            <input
              v-model="fontSize"
              type="number"
              class="text-center border border-[#cccccc] rounded py-2 w-10 h-10 appearance-none"
            />
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize += 1"
            >
              +
            </button>
          </div>

          <button
            class="p-3 disabled:opacity-60"
            :disabled="!editor?.can()?.chain().focus().undo().run()"
            @click="editor.chain().focus().undo().run()"
          >
            <nuxt-icon name="undo" filled />
          </button>
          <button
            class="p-3 disabled:opacity-60"
            :disabled="!editor?.can()?.chain().focus().redo().run()"
            @click="editor.chain().focus().redo().run()"
          >
            <nuxt-icon name="redo" filled />
          </button>
        </div>
      </section>
    </div>
    <section
      v-if="editor"
      class="editor-wrapper prose prose-p:m-0 font-garamond"
    >
      <editor-content :editor="editor" />
    </section>
  </section>
</template>

<style lang="scss">
.editor-toolbar {
  @apply flex gap-12 items-center;
  .editor-option {
    @apply h-10 w-10 p-2 border-solid border-2 border-dark-puce rounded;
    &.active {
      @apply bg-[#CCCCCC] border-none;
    }
  }
}
.editor-wrapper {
  @apply border-none flex-1 h-full max-w-[50rem] mx-auto w-full pt-6 flex;

  & > div {
    @apply flex-1 h-full;
  }
  *:focus-visible {
    @apply border-0 outline-0;
  }
  .tiptap {
    p.is-editor-empty:first-child::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }
    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;

      td,
      th {
        min-width: 1em;
        border: 2px solid #ced4da;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;

        > * {
          margin-bottom: 0;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
        background-color: #f1f3f5;
      }

      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #adf;
        pointer-events: none;
      }

      p {
        margin: 0;
      }
    }
  }

  .tableWrapper {
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  .resize-cursor {
    cursor: col-resize;
  }
  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }

    input[type="checkbox"] {
      cursor: pointer;
    }
  }
}
</style>
