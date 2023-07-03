import {Project} from "../../models/models.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchProjectInfo} from "../../fetchs/fetchhProjectInfo.ts";

const ProjectComponent = ({name, description, id}: Project) => {
    const response = useQuery(["project", id], fetchProjectInfo)

    if (response.isLoading) {
        return (
            <div className="project">
                <div className="box"></div>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="project">
                    <div className="box"></div>
                    <div className="info">
                        <div className="name">{name}</div>
                        <div className="description">{description} {members.length} members</div>
                    </div>
                </div>
    )
}

export default ProjectComponent;