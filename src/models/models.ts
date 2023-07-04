export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export type OrganizationMembers = {
    id: string,
    organizationsBasePermission: Permission,
    memberUserId: string,
    organizationId: string,
}

export type Organization = {
    id: string,
    name: string,

    //: relations
    ownerId?: string,
    projects: Project[],
    OrganizationMembers: OrganizationMembers[],
}

export type User = {
    id: string
    email: string
    password: string
    role: Role,

    //: relations
    tasks: Task[],
    sprints: Sprint[],
    projectsParticipating: Project[],
    projectsManaging: Project[],
    organizationsOwned: Organization[],
    OrganizationMembers: OrganizationMembers[],
    ProjectLevelPermission: ProjectLevelPermission[],
}

export type Column = {
    id: string,
    name: string,
    color: string,
    // relations
    projectId: string,
    tasks: Task[]
}

export type Sprint = {
    id: string,
    name: string,
    description?: string,
    startDate: Date,
    endDate?: Date
    updatedAt?: Date

    //: relations
    createdByUserId: string,
    projectId: string,
    tasks: Task[]
}

export enum Permission {
    NONE = 'NONE',
    READ = 'READ',
    MODIFY = 'MODIFY',
}

export type ProjectLevelPermission = {
    id: string,
    projectPermission: Permission

    //: relations
    projectId: string,
    userId: string,
}

export type Project = {
    id: string,
    name: string,
    description: string,
    startDate: Date,
    endDate?: Date,
    adminId: string,
    organizationId?: string,
    sprints: Sprint[],
    columns: Column[],
    members: User[],
    projectLevelPermissions: ProjectLevelPermission[],
}


export type Attachment = {
    id: string,
    url: string,
    createdAt?: Date,

    //: relations
    taskId: string,
}

export enum Priority {
    ULTRA_LOW = 'ULTRA_LOW',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    ULTRA_HIGH = 'ULTRA_HIGH',
}

export type Task = {
    id: string,
    title: string,
    number: number,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    dueDate?: Date,

    //: relations
    priority: Priority

    assignedToUserId?: string,
    columnId: string,
    sprintId: string,
    comments: Comment[]
    attachments: Attachment[]
}
