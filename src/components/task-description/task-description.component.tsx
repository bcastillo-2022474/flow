import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faClipboard,
    faCodePullRequest,
    faEllipsis,
    faFaceSmile,
    faLink,
    faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
// import TipTapEditorComponent from "../tip-tap-editor/tip-tap-editor.component.tsx";
import "./task-description.component.scss";

import EditorComponent from "../editor/editor.component.tsx";

const TaskDescriptionComponent = () => {
    return (
        <div className="flex w-full">
            <div className="flex w-full flex-col h-full gap-2 py-5 px-2 overflow-y-scroll text-[--white]">
                <div className="text-sm bg-[#1d1d2a] border-[--blue] place-self-start flex items-center border rounded p-2 gap-3">
                    <div className="p-3 bg-white rounded-full"></div>
                    <div className="text-[--gray-subtle]">CST-21</div>
                    <span className="font-bold">Customize Setting</span>
                    <div className="border h-full"></div>
                    <span>1</span>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
                {/*<EditorContent editor={editor}></EditorContent>*/}
                <EditorComponent
                    placeholder="write something awesome..."
                    className="text-2xl text-[--gray-subtle] font-semibold  px-2 py-1"
                ></EditorComponent>
                <EditorComponent
                    placeholder="lol"
                    className="text-sm text-[--gray-subtle] font-semibold bg-transparent bg-white"
                ></EditorComponent>
                <div className="border border-[--blue]"></div>
                <div className="pt-7 px-3 flex flex-col gap-5">
                    <div className="flex gap-2 justify-between items-center">
                        <div className="text-xl font-semibold">Activity</div>
                        <div className="flex gap-2 items-center">
                            <div className="text-sm">Unsubscribe</div>
                            <div className="p-2 rounded-full bg-white"></div>
                            <FontAwesomeIcon
                                icon={faEllipsis}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-4 rounded-full bg-white place-self-start"></div>
                        <div className="grow relative">
                            <EditorComponent
                                placeholder="leave a comment"
                                className="p-4 text-[#626378] border bg-[#212234] h-[150px] overflow-y-scroll"
                            ></EditorComponent>
                            <div className="absolute bottom-0 right-0 mr-4 mb-3 flex gap-2 items-center">
                                <FontAwesomeIcon
                                    icon={faPaperclip}
                                ></FontAwesomeIcon>
                                <div className="button py-1 px-3 rounded border text-sm">
                                    Comment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<EditorContent className="text-xl" editor={editor}></EditorContent>*/}
                <div className="flex cursor-pointer">
                    <div className="rounded-full px-2 py-1 text-xl primary-background">
                        <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDescriptionComponent;
