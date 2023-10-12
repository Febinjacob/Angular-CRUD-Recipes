import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FooterComponent } from './footer/footer.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllRecipesComponent,
    FooterComponent,
    AddRecipesComponent,
    ViewRecipesComponent,
    EditRecipesComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
