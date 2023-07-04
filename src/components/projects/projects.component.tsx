import {Project} from "../../models/models.ts";
import {Link} from "react-router-dom";
import {formatDistance} from "date-fns";

const ProjectComponent = ({project: {name, description, id, startDate}}: { project: Project }) => {


    return (
        <>
            <Link to="project/:id" key={id}
                  className="flex flex-col gap-1 hover:cursor-pointer primary-color-bold active:bg-gray-700">
                <div className="flex justify-between p-1">
                    <div className="flex gap-2 items-center">
                        <div className="bg-blue-900 primary-background rounded active:bg-red-700"
                             style={{width: "50px", height: "50px"}}></div>
                        <div className="flex flex-col">
                            <div>{name}</div>
                            <div className="text-xs">{description}</div>
                        </div>
                    </div>
                    <div
                        className="text-sm">{formatDistance(startDate, new Date(), {addSuffix: true})}</div>
                </div>
            </Link>
            <div className="border-primary-color border-b rounded"></div>
        </>
    )
}

export default ProjectComponent;
