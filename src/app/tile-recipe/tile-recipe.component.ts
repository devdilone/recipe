import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-recipe',
  templateUrl: './tile-recipe.component.html',
  styleUrls: ['./tile-recipe.component.scss']
})
export class TileRecipeComponent implements OnInit {

  img;
  name;
  tags:[];
  ingredients:[];

  constructor() { }

  ngOnInit(): void {
    console.log('printing from recipe tile');
    
  }

}