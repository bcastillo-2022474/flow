import { Project } from "../../models/models.ts";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";

const ProjectComponent = ({
    project: { name, description, id, startDate },
}: {
    project: Project;
}) => {
    return (
        <>
            <Link
                to="project/:id"
                key={id}
                className="flex flex-col gap-1 primary-color-bold hover:cursor-pointer active:bg-gray-700"
            >
                <div className="flex justify-between p-1">
                    <div className="flex items-center gap-2">
                        <div
                            className="rounded bg-blue-900 primary-background active:bg-red-700"
                            style={{ width: "50px", height: "50px" }}
                        ></div>
                        <div className="flex flex-col">
                            <div>{name}</div>
                            <div className="text-xs">{description}</div>
                        </div>
                    </div>
                    <div className="text-sm">
                        {formatDistance(startDate, new Date(), {
                            addSuffix: true,
                        })}
                    </div>
                </div>
            </Link>
            <div className="rounded border-b border-primary-color"></div>
        </>
    );
};

export default ProjectComponent;
