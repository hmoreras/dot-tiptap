import { Editor } from "@tiptap/core"
import { defaultExtensions } from '@tiptap/starter-kit'


const element: HTMLDivElement = document.querySelector('.dot-editor-host') as HTMLDivElement
window.editor = new Editor({
    element: element,
    extensions: [
        ...defaultExtensions()
    ],
    content: '<p>Initial Content </p>',
});

window.dotActions = {
    toggleBold: () => {
        editor.chain().focus().toggleBold().run();
    },
    toggleItalic: () => {
        editor.chain().focus().toggleItalic().run()
    },
    toggleStrike: () => {
        editor.chain().focus().toggleStrike().run();
    },
    toggleHeading: (level: number) => {
        editor.chain().focus().toggleHeading({ level: level }).run()
    },
    undo: () => {
        editor.chain().focus().undo().run()
    },
    redo: () => {
        editor.chain().focus().red().run()
    },


};





