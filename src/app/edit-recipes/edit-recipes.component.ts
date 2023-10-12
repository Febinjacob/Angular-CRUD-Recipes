import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyRecipes } from 'src/model/myRecipes';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {

  groups: MyGroup[] = []
  contact: MyRecipes = {}

  contactId: string = ''
  constructor(private activatedroutedRoute: ActivatedRoute, private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.activatedroutedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.contactId);
      this.contactId = data.contactId;
      this.api.viewRecipesDetails(this.contactId).subscribe((result: any) => {
        console.log(result);
        this.contact = result

        this.api.getAllGroups().subscribe((data: any) => {
          console.log(data);
          this.groups = data

        })

      })
    })
  }
  updateRecipes() {
    this.api.updateRecipes(this.contactId, this.contact).subscribe((result: any) => {
      console.log(result);
      this.route.navigateByUrl('/')
    })
  }

}
