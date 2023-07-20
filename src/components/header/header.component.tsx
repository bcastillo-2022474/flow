import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faChevronDown,
    faPlus,
    faRectangleList,
    faSliders,
    faStar,
    faTable,
} from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
    return (
        <div className="primary-background text-[--white] px-5 h-[calc(100vh/12)] border-b border-[--blue-border] flex items-center justify-between">
            <div className="flex text-sm gap-5 items-center">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                <span className="font-semibold">Issues</span>
                <FontAwesomeIcon
                    className="text-[--blue] hidden sm:block"
                    icon={faStar}
                ></FontAwesomeIcon>
                <div className="rounded-md text-xs border-dashed flex items-center gap-2 px-2 py-1 border border-[#3E3E4C]">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span className="font-bold">Filters</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[--white-subtle]">
                <div className="hidden text-xl bg-[--blue-subtle] p-1 lg:flex gap-3">
                    <FontAwesomeIcon
                        className="px-2 hover:bg-[--blue] rounded"
                        icon={faRectangleList}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        className="px-2 hover:bg-[--blue] rounded"
                        icon={faTable}
                    ></FontAwesomeIcon>
                </div>
                <div className="flex gap-2 bg-[--blue] p-2 items-center rounded">
                    <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                    <span className="hidden md:block">Display</span>
                    <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faChevronDown}
                    ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
