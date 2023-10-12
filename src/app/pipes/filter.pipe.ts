import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allRecipes:any[],searchTerm:string,propsName:string): any[]{
    const result:any[] = [];
    if(!allRecipes||searchTerm==''||propsName==''){
      return allRecipes;
    }

    allRecipes.forEach((recipes:any)=>{
      if(recipes[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
       result.push(recipes)
    })
    return result;
  }

}
