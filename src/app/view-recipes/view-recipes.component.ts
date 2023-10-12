import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {
  recipesId:string=''
  contact:any=[]
  groupId:string=''
  groupName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.recipesId=data.id;
      this.api.viewRecipesDetails(this.recipesId).subscribe((result:any)=>{
        console.log(result);
        this.contact=result

        this.groupId=result.GroupId
        console.log(this.groupId);
        
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);
          this.groupName=data.name
          console.log(this.groupName);
          
          
        })
      })
      
    })
  }

}
