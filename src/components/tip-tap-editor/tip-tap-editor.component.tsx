import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import MenuBarEditorComponent from "../menu-bar-editor/menu-bar-editor.component.tsx";
import { Placeholder } from "@tiptap/extension-placeholder";
import "./tip-tap-editor.component.scss";
import { useState } from "react";

const content = `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `;
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
