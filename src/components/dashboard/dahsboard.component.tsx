import {useQuery} from "@tanstack/react-query";
import {fetchProjects} from "../../fetchs/fetchProjects.ts";
import {formatDistance} from "date-fns"
import {Link} from "react-router-dom";

const DashBoard = () => {
    const data = useQuery(["dashboard"], fetchProjects)

    if (data.isLoading) {
        return (
            <div className="main">
                <div>Loading...</div>
            </div>
        )
    }

    if (data.isError) {
        return (
            <div className="main">
                <div>Error...</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-1 p-1">
            <div className="border-primary-color border-b"></div>

            {data.data?.map((project) => (
                <>
                    <Link to="project/:id" key={project.id}
                          className="flex flex-col gap-1 hover:cursor-pointer primary-color-bold active:bg-gray-700">
                        <div className="flex justify-between p-1">
                            <div className="flex gap-2 items-center">
                                <div className="bg-blue-900 primary-background rounded active:bg-red-700"
                                     style={{width: "50px", height: "50px"}}></div>
                                <div className="flex flex-col">
                                    <div>{project.name}</div>
                                    <div className="text-xs">{project.description}</div>
                                </div>
                            </div>
                            <div
                                className="text-sm">{formatDistance(project.startDate, new Date(), {addSuffix: true})}</div>
                        </div>
                    </Link>
                    <div className="border-primary-color border-b rounded"></div>
                </>
            ))}
        </div>
    )
}

export default DashBoard
