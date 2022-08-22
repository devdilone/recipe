import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment as env} from '../environments/environment';

import chickenRecipes1 from '../assets/backUpData/recipes/chicken/chickenRecipes1.json';
import chickenRecipes2 from '../assets/backUpData/recipes/chicken/chickenRecipes2.json';
import chickenRecipes3 from '../assets/backUpData/recipes/chicken/chickenRecipes3.json';
import chickenRecipes4 from '../assets/backUpData/recipes/chicken/chickenRecipes4.json';
import chickenRecipes5 from '../assets/backUpData/recipes/chicken/chickenRecipes5.json';
import chickenRecipes6 from '../assets/backUpData/recipes/chicken/chickenRecipes6.json';
import chickenRecipes7 from '../assets/backUpData/recipes/chicken/chickenRecipes7.json';
import chickenRecipes8 from '../assets/backUpData/recipes/chicken/chickenRecipes8.json';
import chickenRecipes9 from '../assets/backUpData/recipes/chicken/chickenRecipes9.json';
import chickenRecipes10 from '../assets/backUpData/recipes/chicken/chickenRecipes10.json';

import beefRecipes1 from '../assets/backUpData/recipes/beef/beefRecipes1.json';
import beefRecipes2 from '../assets/backUpData/recipes/beef/beefRecipes2.json';
import beefRecipes3 from '../assets/backUpData/recipes/beef/beefRecipes3.json';
import beefRecipes4 from '../assets/backUpData/recipes/beef/beefRecipes4.json';
import beefRecipes5 from '../assets/backUpData/recipes/beef/beefRecipes5.json';
import beefRecipes6 from '../assets/backUpData/recipes/beef/beefRecipes6.json';
import beefRecipes7 from '../assets/backUpData/recipes/beef/beefRecipes7.json';
import beefRecipes8 from '../assets/backUpData/recipes/beef/beefRecipes8.json';
import beefRecipes9 from '../assets/backUpData/recipes/beef/beefRecipes9.json';
import beefRecipes10 from '../assets/backUpData/recipes/beef/beefRecipes10.json';

import fishRecipes1 from '../assets/backUpData/recipes/fish/fishRecipes1.json';
import fishRecipes2 from '../assets/backUpData/recipes/fish/fishRecipes2.json';
import fishRecipes3 from '../assets/backUpData/recipes/fish/fishRecipes3.json';
import fishRecipes4 from '../assets/backUpData/recipes/fish/fishRecipes4.json';
import fishRecipes5 from '../assets/backUpData/recipes/fish/fishRecipes5.json';
import fishRecipes6 from '../assets/backUpData/recipes/fish/fishRecipes6.json';
import fishRecipes7 from '../assets/backUpData/recipes/fish/fishRecipes7.json';
import fishRecipes8 from '../assets/backUpData/recipes/fish/fishRecipes8.json';
import fishRecipes9 from '../assets/backUpData/recipes/fish/fishRecipes9.json';
import fishRecipes10 from '../assets/backUpData/recipes/fish/fishRecipes10.json';

@Injectable({
  providedIn: 'root'
})
export class BackupService {
  constructor(private http:HttpClient) { }

  chickenRecipes = [
    chickenRecipes1,
    chickenRecipes2,
    chickenRecipes3,
    chickenRecipes4,
    chickenRecipes5,
    chickenRecipes6,
    chickenRecipes7,
    chickenRecipes8,
    chickenRecipes9,
    chickenRecipes10
  ];
  beefRecipes = [
    beefRecipes1,
    beefRecipes2,
    beefRecipes3,
    beefRecipes4,
    beefRecipes5,
    beefRecipes6,
    beefRecipes7,
    beefRecipes8,
    beefRecipes9,
    beefRecipes10,
  ];
  fishRecipes = [
    fishRecipes1,
    fishRecipes2,
    fishRecipes3,
    fishRecipes4,
    fishRecipes5,
    fishRecipes6,
    fishRecipes7,
    fishRecipes8,
    fishRecipes9,
    fishRecipes10,
  ];
  dbURL = 'http://localhost:8080/backup/downloadDatabase';
  
  fetchLocalRecipes(proteinType,recipeNumber){
    if(recipeNumber>= env.recipesStartIndex-1 && recipeNumber <=env.recipesEndIndex+1){
      switch(proteinType){
        case 'chicken':
          console.log('service fetching chicken recipe: ' + recipeNumber);
            return this.chickenRecipes[recipeNumber-1];
        case 'fish':
            return this.fishRecipes[recipeNumber];
        case 'beef':
            return this.beefRecipes[recipeNumber];
        default:
            return console.error('unavailable protein type given');
      }
    }else{
      return console.error('invalid recipe number');
    }
  }
  
  saveDbRecipes(recipeList:any):Observable<any>{
    return this.http.post<any>(this.dbURL,recipeList);
  }

  // URL to get recipe based on recipeId
  // https://api.edamam.com/api/recipes/v2/recipe_b5e1c34c9042a35a534069f438ec86fc?type=public&app_id=ce18cc07&app_key=bdf89d1651055d5adf0258119ab671cb
  fetchPicturesWithRecipeId(recipeId):Observable<any>{
    let fetchURL = 'https://api.edamam.com/api/recipes/v2/';
    let fetchURLParams = '?type=public&app_id=ce18cc07&app_key=bdf89d1651055d5adf0258119ab671cb';

    return this.http.get(fetchURL+recipeId+fetchURLParams);
  }

  fetchRecipeTilewithRecipeId(recipeId):Observable<any>{
    return this.http.get<any>(this.dbURL,recipeId);
  }

}