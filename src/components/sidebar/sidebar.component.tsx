import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faEllipsis,
    faPenToSquare,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

const SidebarComponent = () => {
    return (
        <div className="hidden text-[--white-subtle] primary-background border-t-0 border border-[--blue-border] lg:flex flex-col gap-3 min-w-[200px] w-1/6 max-w-[300px] p-4 text-xs font-semibold">
            <div className="flex justify-between">
                <div className="flex gap-2 max-w-[80%] items-center">
                    <div className="bg-green-500 p-3 rounded"></div>
                    <span className="truncate">Lorem ipsum dolor sit.</span>
                </div>
                <div className="p-3 rounded-full bg-white"></div>
            </div>
            <div className="flex justify-between gap-2">
                <div className="cursor-pointer flex grow gap-2 items-center px-2 py-1 bg-[--gray] rounded border border-[--gray-border]">
                    <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                    <span className="min-w-[9ch] max-w-[15ch]">New Issue</span>
                </div>
                <div className="cursor-pointer flex items-center px-2 bg-[--gray] rounded border border-[--gray-border]">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
            </div>
            <span className="text-[--gray-subtle]">Your teams</span>
            <div className="flex justify-between gap-2 items-center p-1 px-2 cursor-pointer rounded hover:bg-[rgb(38,39,54)]">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <div className="font-bold truncate">CST-21-workspace</div>
                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SidebarComponent;
