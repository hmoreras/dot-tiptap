import { Extension } from '@tiptap/core'
import { BubbleMenuPlugin, BubbleMenuPluginProps } from './bubble-menu-plugin'

export type BubbleMenuOptions = Omit<BubbleMenuPluginProps, 'editor' | 'element'> & {
  element: HTMLElement | null,
}

export const BubbleMenu = Extension.create<BubbleMenuOptions>({
  name: 'bubbleMenu',

  defaultOptions: {
    element: null,
    keepInBounds: true,
  },

  addProseMirrorPlugins() {
    if (!this.options.element) {
      return []
    }

    return [
      BubbleMenuPlugin({
        editor: this.editor,
        element: this.options.element,
        keepInBounds: this.options.keepInBounds,
      }),
    ]
  },
})
