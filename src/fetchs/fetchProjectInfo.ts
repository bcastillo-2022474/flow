import {Query} from "@tanstack/react-query";

export const fetchProjectInfo = ({queryKey}: Query ) => {
    const [, projectId] = queryKey;
    return fetch(`http://localhost:3001/projects/${projectId}`)
}