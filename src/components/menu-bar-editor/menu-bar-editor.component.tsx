import { Editor } from "@tiptap/react";
import "./menu-bar-editor.component.scss";
import {
    faAt,
    faBold,
    faCode,
    faComment,
    faH,
    faItalic,
    faList,
    faListOl,
    faP,
    faPalette,
    faQuoteLeft,
    faRedo,
    faS,
    faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    className?: string;
    icon?: any;
};

const Button = ({
    onClick,
    isDisabled,
    className,
    icon = faAt,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={className + " rounded hover:bg-gray-700 px-2 py-1"}
        >
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
    );
};

const MenuBarEditorComponent = ({ editor }: { editor: Editor }) => {
    if (!editor) {
        return null;
    }

    const buttons: ButtonProps[] = [
        {
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            className: editor.isActive("heading", { level: 5 })
                ? "is-active"
                : "",
            icon: faH,
        },
        {
            onClick: () => editor.chain().focus().toggleBold().run(),
            isDisabled: !editor.can().chain().focus().toggleBold().run(),
            className: editor.isActive("bold") ? "is-active" : "",
            icon: faBold,
        },

        {
            onClick: () => editor.chain().focus().toggleItalic().run(),
            isDisabled: !editor.can().chain().focus().toggleItalic().run(),
            className: editor.isActive("italic") ? "is-active" : "",
            icon: faItalic,
        },

        {
            onClick: () => editor.chain().focus().toggleStrike().run(),
            isDisabled: !editor.can().chain().focus().toggleStrike().run(),
            className: editor.isActive("strike") ? "is-active" : "",
            icon: faS,
        },

        {
            onClick: () => editor.chain().focus().toggleCode().run(),
            isDisabled: !editor.can().chain().focus().toggleCode().run(),
            className: editor.isActive("code") ? "is-active" : "",
            icon: faComment,
        },

        {
            onClick: () => editor.chain().focus().setParagraph().run(),
            className: editor.isActive("setParagraph") ? "is-active" : "",
            icon: faP,
        },

        {
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            className: editor.isActive("bulletList") ? "is-active" : "",
            icon: faList,
        },

        {
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            className: editor.isActive("orderedList") ? "is-active" : "",
            icon: faListOl,
        },

        {
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            className: editor.isActive("codeBlock") ? "is-active" : "",
            icon: faCode,
        },

        {
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            className: editor.isActive("blockquote") ? "is-active" : "",
            icon: faQuoteLeft,
        },

        {
            onClick: () => editor.chain().focus().undo().run(),
            isDisabled: !editor.can().chain().focus().undo().run(),
            icon: faUndo,
        },

        {
            onClick: () => editor.chain().focus().redo().run(),
            isDisabled: !editor.can().chain().focus().redo().run(),
            icon: faRedo,
        },

        {
            onClick: () => {
                if (editor.isActive("textStyle", { color: "#958DF1" })) {
                    editor.chain().focus().unsetColor().run();
                    return;
                }
                editor.chain().focus().setColor("#958DF1").run();
            },
            className: editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : "",
            isDisabled: !editor.can().chain().focus().setColor("").run(),
            icon: faPalette,
        },
        // {
        //     onClick: () => editor.chain().focus().setHorizontalRule().run(),
        // },
        //
        // {
        //     onClick: () => editor.chain().focus().setHardBreak().run(),
        // },
        // {
        //     onClick: () => editor.chain().focus().unsetAllMarks().run(),
        // },
        //
        // {
        //     onClick: () => editor.chain().focus().clearNodes().run(),
        // },
    ];

    return (
        <div
            className="text-md primary-color flex gap-3 py-2 overflow-x-scroll no-scrollbar"
            style={{ backgroundColor: "black" }}
        >
            {buttons.map((button: ButtonProps, index: number) => (
                <Button
                    onClick={button.onClick}
                    isDisabled={button.isDisabled}
                    className={button.className}
                    icon={button.icon}
                    key={index}
                ></Button>
            ))}
        </div>
    );
};

export default MenuBarEditorComponent;
