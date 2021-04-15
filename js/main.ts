import { DotEditor } from './dotEditor';

declare global {
    interface Window {
        dotEditor: DotEditor;
    }
}

window.dotEditor = new DotEditor('.dot-editor-host');
