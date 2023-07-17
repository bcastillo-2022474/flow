import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import MenuBarEditorComponent from "../menu-bar-editor/menu-bar-editor.component.tsx";
import { Placeholder } from "@tiptap/extension-placeholder";
import "./tip-tap-editor.component.scss";
import { useState } from "react";

const TipTapEditorComponent = () => {
    const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);
    const editor = useEditor({
        extensions: [
            Placeholder.configure({
                placeholder: "Write something awesome...",
            }),
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
    return (
        <>
            <div className="fixed invisible"></div>
            {/*sticky bottom-0*/}
            <div
                onFocus={() => setIsMenuBarVisible(true)}
                className="flex flex-col w-full"
            >
                {/*<MenuBarEditorComponent editor={editor} />*/}
                <EditorContent editor={editor} />
                <hr />
                <div className={isMenuBarVisible ? "" : "hidden"}>
                    <MenuBarEditorComponent
                        editor={editor}
                    ></MenuBarEditorComponent>
                </div>
            </div>
        </>
    );
};

export default TipTapEditorComponent;
