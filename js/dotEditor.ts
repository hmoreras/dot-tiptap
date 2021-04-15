import { Editor } from '@tiptap/core';
import { defaultExtensions } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { dotContentTypeService } from './services/dotContentType.service';

export class DotEditor {
    private readonly editor: Editor;
    private readonly element: HTMLDivElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector) as HTMLDivElement;

        this.editor = new Editor({
            element: this.element,
            extensions: [Underline, ...defaultExtensions()],
            content: '<p>Dot Editor Initial Content</p>'
        });

        dotContentTypeService.get().then((data: []) => {
            data.forEach((item: any) => {
                this.editor.chain().insertContent(`<p>${item.name}</p>`).run();
            });
        });
    }

    public dotActions = {
        toggleBold: () => {
            this.editor.chain().focus().toggleBold().run();
        },
        toggleUnderline: () => {
            this.editor.chain().focus().toggleUnderline().run();
        },
        toggleStrike: () => {
            this.editor.chain().focus().toggleStrike().run();
        },
        toggleHeading: (level: any) => {
            this.editor.chain().focus().toggleHeading({ level: level }).run();
        },
        undo: () => {
            this.editor.chain().focus().undo().run();
        },
        redo: () => {
            this.editor.chain().focus().redo().run();
        }
    };
}
