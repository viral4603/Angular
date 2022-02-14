//data type for user
export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    number:number,
    clientname:number,
    office:number
}

//data type for  Client
export interface Client{
    id:number,
    name:string
}

//data type for office
export interface Office{
    id:number,
    name:string
}
