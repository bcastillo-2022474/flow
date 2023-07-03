import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus} from "@fortawesome/free-solid-svg-icons";

const ProjectViewComponent = () => {
    return (
        <div className="flex min-w-full min-h-full gap-3 p-5">
            <div
                className="border border-primary-color rounded-3xl min-w-full p-5 secondary-background flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 items-center primary-color-bold">
                    <span className="rounded-full bg-emerald-300"
                          style={{width: "15px", height: "15px"}}></span>
                        <span>title</span>
                        <span
                            className="bg-gray-700 primary-color font-bold rounded-full flex items-center justify-center text-xs"
                            style={{width: "2.5ch", height: "2.5ch"}}>3</span>
                    </div>
                    <div className="primary-color text-xs mb-3">
                        this is a description
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 text-xs">
                            <div
                                className="flex flex-col primary-background border border-primary-color rounded-md p-3 gap-2">
                                <div className="flex gap-1 items-center primary-color">
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#8256d0"}}></FontAwesomeIcon>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>
                                <div className="primary-color-bold">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias, quod?
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-xs">
                            <div
                                className="flex flex-col primary-background border border-primary-color rounded-md p-3 gap-2">
                                <div className="flex gap-1 items-center primary-color">
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#8256d0"}}></FontAwesomeIcon>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>
                                <div className="primary-color-bold">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias, quod?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="btn flex justify-end primary-color-bold font-bold text items-center gap-2 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faPlus}/><span>add Item</span></div>
            </div>
            <div className="border border-primary-color rounded-3xl min-w-full p-5 secondary-background">
                <div className="flex gap-1 items-center primary-color-bold">
                    <span className="rounded-full bg-emerald-300"
                          style={{width: "15px", height: "15px"}}></span>
                    <span>title</span>
                    <span
                        className="bg-gray-700 primary-color font-bold rounded-full flex items-center justify-center text-xs"
                        style={{width: "2.5ch", height: "2.5ch"}}>3</span>
                </div>
                <div className="primary-color text-xs mb-3">
                    this is a description
                </div>
                <div className="flex flex-col gap-2 text-xs">
                    <div className="flex flex-col primary-background border border-primary-color rounded-md p-3 gap-2">
                        <div className="flex gap-1 items-center primary-color">
                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#8256d0"}}></FontAwesomeIcon>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="primary-color-bold">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Alias, quod?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectViewComponent;
