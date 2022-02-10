export interface Resume {
    id:number,
    name:string,
    designation: string,
    education: string,
    educationDescription: string,
    email: string,
    number: string
    profile: string,
    experience: Profile[],
    skill: Skill[],
    technical:Technical[]
}
export interface Profile{
    company: string,
    designationInCompany: string,
    detailscompny:string
}
export interface Skill{
    skilldetails: string,
    skills:string
}
export interface Technical{
    technical:string
}