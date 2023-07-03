import {Project} from "../models/models.ts";

const createMockProject = (): Project[] => {
    const array: Project[] = [];
    for (let i = 0; i < 20; i++) {
        const project: Project = {
            id: `${i}`,
            name: `Project ${i}`,
            description: `Project ${i} description`,
            adminId: `${i}`,
            organizationId: `${i}`,
            startDate: new Date(),
            endDate: null,
            sprints: [],
            columns: [],
            members: [],
            projectLevelPermissions: [],
        }
        array.push(project);
    }

    return array;
}

export const fetchProjects = async (): Promise<Project[]> => {
    /*const data = await fetch(`${URL}/projects`).then(res => res.json()).catch(err => console.log(err));
    return data || [];*/
    return createMockProject();
}