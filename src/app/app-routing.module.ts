import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //localhost
  {
    path:'',redirectTo:'all-recipes',pathMatch:'full'
  },
  //listing all details
  {
    path:'all-recipes',component:AllRecipesComponent
  },
  //add details
  {
    path:'all-recipes/add-recipes',component:AddRecipesComponent
  },
  //view details
  {
    path:'all-recipes/view/:id',component:ViewRecipesComponent
  },
  //edit details 
  {
    path:'all-recipes/edit/:contactId',component:EditRecipesComponent
  },
  //pageNotFound
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
