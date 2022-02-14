import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Office, User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpLink: string = environment.baseURL;
  constructor(private https:HttpClient) { }
 //addNewUser
  public createUser(user:User):Observable<User>{
  return this.https.post<User>(`${this.httpLink}/users`,user)
 } 

 //get all user
 public getUsersdetails():Observable<User[]>{
   return this.https.get<User[]>(`${this.httpLink}/users`)
 }
 //getuserbyId
 public getUserById(id:number):Observable<User>{
   return this.https.get<User>(`${this.httpLink}/users/${id}`)
 }
 
 //delete user
 public deleteUser(id:number):Observable<number>{
  return this.https.delete<number>(`${this.httpLink}/users/${id}`)
 }

 //update user
 public updateUser(id:number,user:User[]):Observable<User>{
   return this.https.put<User>(`${this.httpLink}/users/${id}`,user)
 }

 //get client list
 public getClientlist():Observable<Client[]>{
  return this.https.get<Client[]>(`${this.httpLink}/client`)
 }
 //get office list 
 public getOfficeList():Observable<Office[]>{
   return this.https.get<Office[]>(`${this.httpLink}/office`)
 }

}


