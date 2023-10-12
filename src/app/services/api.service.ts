import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyRecipes } from 'src/model/myRecipes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllRecipes():Observable<MyRecipes>{
    
    return this.http.get('http://localhost:3000/recipes')

  }
  viewRecipesDetails(recipesId:string){
    return this.http.get(`http://localhost:3000/recipes/${recipesId}`)
  }
  getGroupName(GroupId:string){
    return this.http.get(`http://localhost:3000/groups/${GroupId}`)
  }
  addRecipes(contactBody:any){
    return this.http.post(`http://localhost:3000/recipes`,contactBody)
  }
 getAllGroups(){
  return this.http.get(`http://localhost:3000/groups`)
 }
 deleteRecipes(recipesId:any){
  return this.http.delete(`http://localhost:3000/recipes/${recipesId}`)
 }
 updateRecipes(recipesId:any,contactBody:any){
  return this.http.put(`http://localhost:3000/recipes/${recipesId}`,contactBody)
 }
}
