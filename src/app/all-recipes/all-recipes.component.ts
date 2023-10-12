import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyRecipes } from 'src/model/myRecipes';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  searchKey:string = ''
  allRecipes:any=[];



   constructor(private api:ApiService){}
   ngOnInit(): void {
   this.getAllRecipes() 
    
  }
  getAllRecipes(){
    this.api.getAllRecipes().subscribe((data:MyRecipes)=>{
      console.log(data);
      this.allRecipes=data
      })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
  deleteRecipes(recipesId:any){
    this.api.deleteRecipes(recipesId).subscribe((result:any)=>{
      alert("Delete Successfully")
      this.getAllRecipes()
    })
  }

}
