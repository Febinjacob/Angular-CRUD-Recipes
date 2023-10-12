import { Component, OnInit } from '@angular/core';
import { MyRecipes } from 'src/model/myRecipes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {

  allGroups: any = []
  // recipesName:string='';
  recipes: MyRecipes = {}

  constructor(private api: ApiService, private router: Router) {
    this.recipes.GroupId = "Select A Group";
  }

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data: any) => {
      console.log(data);
      this.allGroups = data
    })
  }
  addRecipes() {
    this.api.addRecipes(this.recipes).subscribe((result: any) => {
      this.router.navigateByUrl('')
    })
  }
}
