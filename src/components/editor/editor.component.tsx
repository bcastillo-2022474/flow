import { Placeholder } from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import { EditorContent, useEditor } from "@tiptap/react";
import "./editor.component.scss";

const EditorComponent = ({
    placeholder,
    className,
}: {
    placeholder: string;
    className: string;
}) => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: className,
            },
        },
        extensions: [
            Placeholder.configure({ placeholder }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure({ types: [ListItem.name] } as any),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
        ],
        content: "",
    });

    if (!editor) return null;
    return <EditorContent editor={editor}></EditorContent>;
};

export default EditorComponent;
