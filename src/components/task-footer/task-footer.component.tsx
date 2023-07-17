import TipTapEditorComponent from "../tip-tap-editor/tip-tap-editor.component.tsx";

const TaskFooterComponent = () => (
    <>
        <div className="fixed"></div>
        <div className="border-t sticky bottom-0 text-white w-full z-50">
            <TipTapEditorComponent></TipTapEditorComponent>
        </div>
    </>
);

export default TaskFooterComponent;
