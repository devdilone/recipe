import { Component, OnInit } from '@angular/core';
import { BackupService } from '../backEnd.service';
import {environment as env} from '../../environments/environment';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss']
})

export class UtilComponent implements OnInit {
  imageLinks = [];
  // imageLinks = [
  //   "https://edamam-product-images.s3.amazonaws.com/web-img/0c5/0c5ba5e925e8de4a16deaa1864cb1812.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLWVhc3QtMSJHMEUCIB%2FnoRTWHLQCpqHENE8d1tHdsTM1GCim14HM25wA0L9QAiEAhsDkaNFjLMa5P2CKxCVofsBVfECPojpzKBFFuvidUUYq0gQIdhAAGgwxODcwMTcxNTA5ODYiDGc2ty7hXRHofm5U%2FSqvBDMqXNy1ffuNv%2Bt7sjLGp%2FesRB2IGvfJiD2dArcZBhh%2BgA4AEpDsOCZBClGDG30tXeMayIPp20YBKRzrOgq7bbQ%2BV1H6FAKGG6oJpX9MYUg2NTxecWDwmiFlbkRpA9k0OGO%2Bd29zwXwvHon0qUYP5S0z0O2%2BIjDWLSK8Oa075nsPULInctVLmk3DjAazJGdrpF2McOJoP1ObbbMyjatTlftOT%2FVnbxBVIiBqrsoZTklIKSV%2B2ya1n8syJ87rZTl65dNHRbGUimyvAs%2Fmoz2sHs8CIKryS4o4JI6Ja1jvvNgQfCtA6wHRvb754LwIFxWyZEr4khhKfgFJEr%2BNLcX2gnZ07%2FQ%2FFRLdWpwwJDmPvLvGcKHor7Ri%2BqYDkhZ%2B%2BcslWb6rHY%2Fg8fRfFKiZ%2BM5jnD3PEsLP8PSLHZOrN1dro%2F5bePgYsUtvrXi7lUIj4X2sgTuKHLgCsi0H6njxu2Fu00LhrSyRYFgMX0F2MDdZY4Q1wSgCmB22N4O%2BYx%2BPXZIwMckC7JGZXMsndMwq5QfhKWSsJeVXLfyNdlEWMPfM6MAqPkmnLmRZm0lB4pxt1bgYpxOkZ2Z0Nwzz7Rjrm1e6ZbcGXJeJdHSVMBM8cI553sA1MvXDfCPtT1xH4SqheTt%2Ba3zhfP6wQZZCCIqFTz52aXNloqhRn%2B9JuicxDokTBDIvwadVX9snA7rxG4h82DKAufFiR8p4%2BcZb6ehJE%2FgrdlLRj%2FeGehBsamWPUpfZmW8wp7SklwY6qQECThsqmTiaWHV%2Fw2jm9FcybQkgI2i5%2BrVf%2FrqgUa%2Fjlifmf9J8tv3Ti6VsOoAoYkLZJ3tA9ZzPQCsacHoyFDyAugrkeAADtvzYlPS0UT95UbF5uxjQyXJEocyJ5ceagEcUtxC6n5BOKPueeKTei33o4Ws9r1cOldGd%2Bhm7g4LBsu%2Ft6oXYlk5gb2y1d5zQdA7eqSUg0EBvNlAeP4fOwH3bZfsJp2SK8utW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220802T134647Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIKJYNV7U%2F20220802%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0aee6080237d1ff26a9feecfcb63abaed4d67d75565fa0875c916eaef3f366a8",
  //   "https://edamam-product-images.s3.amazonaws.com/web-img/30b/30b5950cb398a32adaf4f5b775d71d78.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLWVhc3QtMSJHMEUCIB%2FnoRTWHLQCpqHENE8d1tHdsTM1GCim14HM25wA0L9QAiEAhsDkaNFjLMa5P2CKxCVofsBVfECPojpzKBFFuvidUUYq0gQIdhAAGgwxODcwMTcxNTA5ODYiDGc2ty7hXRHofm5U%2FSqvBDMqXNy1ffuNv%2Bt7sjLGp%2FesRB2IGvfJiD2dArcZBhh%2BgA4AEpDsOCZBClGDG30tXeMayIPp20YBKRzrOgq7bbQ%2BV1H6FAKGG6oJpX9MYUg2NTxecWDwmiFlbkRpA9k0OGO%2Bd29zwXwvHon0qUYP5S0z0O2%2BIjDWLSK8Oa075nsPULInctVLmk3DjAazJGdrpF2McOJoP1ObbbMyjatTlftOT%2FVnbxBVIiBqrsoZTklIKSV%2B2ya1n8syJ87rZTl65dNHRbGUimyvAs%2Fmoz2sHs8CIKryS4o4JI6Ja1jvvNgQfCtA6wHRvb754LwIFxWyZEr4khhKfgFJEr%2BNLcX2gnZ07%2FQ%2FFRLdWpwwJDmPvLvGcKHor7Ri%2BqYDkhZ%2B%2BcslWb6rHY%2Fg8fRfFKiZ%2BM5jnD3PEsLP8PSLHZOrN1dro%2F5bePgYsUtvrXi7lUIj4X2sgTuKHLgCsi0H6njxu2Fu00LhrSyRYFgMX0F2MDdZY4Q1wSgCmB22N4O%2BYx%2BPXZIwMckC7JGZXMsndMwq5QfhKWSsJeVXLfyNdlEWMPfM6MAqPkmnLmRZm0lB4pxt1bgYpxOkZ2Z0Nwzz7Rjrm1e6ZbcGXJeJdHSVMBM8cI553sA1MvXDfCPtT1xH4SqheTt%2Ba3zhfP6wQZZCCIqFTz52aXNloqhRn%2B9JuicxDokTBDIvwadVX9snA7rxG4h82DKAufFiR8p4%2BcZb6ehJE%2FgrdlLRj%2FeGehBsamWPUpfZmW8wp7SklwY6qQECThsqmTiaWHV%2Fw2jm9FcybQkgI2i5%2BrVf%2FrqgUa%2Fjlifmf9J8tv3Ti6VsOoAoYkLZJ3tA9ZzPQCsacHoyFDyAugrkeAADtvzYlPS0UT95UbF5uxjQyXJEocyJ5ceagEcUtxC6n5BOKPueeKTei33o4Ws9r1cOldGd%2Bhm7g4LBsu%2Ft6oXYlk5gb2y1d5zQdA7eqSUg0EBvNlAeP4fOwH3bZfsJp2SK8utW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220802T134648Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIKJYNV7U%2F20220802%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf90c0fdf447835df9bc3aebb90f05e850c9b735f94fffe856b5a4dba78bb955"
  // ];
  FileSaver = require('file-saver');
  htmlLink;
  constructor(private backupService:BackupService) { }
  base64Image;
  ngOnInit(): void {
    // let link = 'https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIA2k8rXTy7h%2F%2Bs5Tdl7HQsBsXKY9m8OHX5mScpVjDSN0AiEAuA82nXBvDSrOoogL1ApdexF75ehaEWQkDrsu5I7rL%2Fkq2wQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDoVEGAADWOsfnxyAyqvBAK%2BCIwWDOXA4ufH6IBCfngIKPU4Gc0bcumR%2FamZ59XrjtCmgXmovtrJ8CZrU1njswtvZrOcxO6sYabfkoDOZJjRRoqi5HjChvuXTQw7CdF8AWuK8GkfiJZ3iJ2N8dW%2FfAmtC2SCFsXf51mP8tX570KI3C71Ls4YYSV7ku9jpBBO7j0Z5W%2BcK9QtV8ZwqKZJx9NV0IFGRtKg8DrNaHJOBIKbV5rqfWU1QPVV1YN%2F9kEXLGcQLTbROiVLcdJJ46stLLlq28x3QUDQ8PZCFUNGzMq2U2ArWPIWoVeoaPfYlNXqIMKjvrClzOgQ9UGUSU5sABSB7t0E5OqvVux1ALbdlpyMCOU%2FV0Y5K45MdKuo2SaYTMcXLe%2FZj6ymEs%2FMRb%2BI%2BwzcalEaozKejYyuhNKAIsqUyRfqf6h1PwVMakmNgO0qmQcN%2BJYBOQziVTVaOsZmWUO7ge476%2FoG3YMGSwLRJ4wXHnF1AzM346UIcpX%2BJ1AdGv%2BaxxakpVQSIgLuauIH%2BA8%2FfO%2FALxQ05TAOvUXVaA44yNydPhw6G95vm03fZQ2UUzfrJhBW2p9brWWeQXaBzayBjM1ZNRNkm0BhMhxmE3ZKoEO30P8GopDyu12mAosS1eF%2BAjHBR4QAoQZinmxWsQ46AOmWSbBWKFWTent6SHNChN2rzCgNgYVAT%2Fl0E7ALwaokLfqVZHxLXqMeeVdylz6rJqgU%2B0XF6s%2FPwWVImfNwPJI2h%2FNME%2BwBn5QeXOkw0ZTakwY6qQFxJZXagY2gqAiE2byDbyoo0j6hJxR7Xo84kVvHAXjy%2FlQmBkconpJRnFB4efsgVorEeR2U5jZ%2F1lGsgKloh2nB9vqTvcWlUIYqoWwUvCczrycOiilrHdjZUyl7oJfBadmFxo%2ByNnFcXbVzTaFuLiRf9Eeslk0NLstWzCfEASWnohd1yoxWKEEKtaXuRT%2B4iU%2F%2BtlCgnu5UcFbNh6fCXczQ10W8fG7gSDov&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220507T154308Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOVDTGPMD%2F20220507%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=414e5534e5ce2d5a99abb122773f622dcdef7baf29852640fe3f1fe2352ac0f3';
    // this is the id for the general tsos recipe
    // let recipeId = 'recipe_b5e1c34c9042a35a534069f438ec86fc';   
    // this.saveImage(link,'testImage');
    // this.htmlLink = link;

    // this.saveImagesFromBackupJson();
  }

  saveImagesFromBackupJson(){
    // extract the recipe_XXXXXXXXXX string from recipe.uri
    // call the service to extract data on a specific recipe
    // save the image from the fetched recipe
    // map the recipe id to the image url
    // save all images
    // iterate through all images and change their names based on what image corresponds to what recipe id

    // extracting recipe_XXXXXXX string from recipe uri
    console.log("Starting save images");
    for(let i = env.recipesStartIndex;i <= env.recipesEndIndex;i++){
      console.log('fetching chicken recipe ' + i);
      let json = this.backupService.fetchLocalRecipes('fish',i);
      console.log(json);
      json.hits.forEach(hit => {
        // this will return the recipe id
        let recipeId = hit.recipe.uri.split('#').pop();
        // console.log(recipeId);
        // wait(3000);
        this.backupService.fetchPicturesWithRecipeId(recipeId).subscribe(res =>{
          let imageLink:string = res.recipe.image;
          this.imageLinks.push(imageLink.toString());
        })
      });
    }

    function wait(ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
   }
    
    console.log("the image array at size" + this.imageLinks.length +  ":" , this.imageLinks)

    // building a link to the recipe image based on id
    // this.backupService.fetchPicturesWithRecipeId('recipe_b5e1c34c9042a35a534069f438ec86fc').subscribe(res=>{
    //   // this image link will point to the pic for the recipe
    //   console.log("response from fetchPicturesWith Recipe " + res);
    //   let imageLink:string = res.recipe.image;
    //   console.log(" image link in fetchPicturesWithRecipeId " + imageLink);
    //   this.htmlLink = imageLink;
    // });
    
    
  }
  downloadDatabase(){

    // chicken
     for(let i = env.recipesStartIndex;i < env.recipesEndIndex;i++){
      let json = this.backupService.fetchLocalRecipes('chicken',i);
      console.log(json);
      this.postRecipes(json,'chicken');
    }
    // beef
    for(let i = env.recipesStartIndex;i < env.recipesEndIndex;i++){
      let json = this.backupService.fetchLocalRecipes('beef',i);
      console.log(json);
      this.postRecipes(json,'beef');
    }
    // fish
    for(let i = env.recipesStartIndex;i < env.recipesEndIndex;i++){
      let json = this.backupService.fetchLocalRecipes('fish',i);
      console.log(json);
      this.postRecipes(json,'fish');
    }
  }
  postRecipes(json,recipeType){
    let dtoList:any[] = [];
    console.log('clicked');
  
    console.log(json);
    
    // organize val into usable DTOs
    json.hits.forEach(recipeObj => {
      // init the DTO
      let dtoToAdd:any = {
        downloadDTORecipe:{
          name: recipeObj.recipe.label,
          img: recipeObj.recipe.image
        },
        ingredients:recipeObj.recipe.ingredients,
        downloadDTOIngredientList:[],
        tags: recipeObj.recipe.healthLabels,
        downloadDTOTagList:[]
      }
     
      dtoToAdd.ingredients.forEach(ingredient => {
        let dtoName = ingredient['text'];
        let dtoType = ingredient['food'];
       
        let dtoIngredient = {name:dtoName,type:dtoType,ingredientId:null}
        dtoToAdd.downloadDTOIngredientList.push(dtoIngredient);
      });

      dtoToAdd.tags.forEach(tag =>{
        let tagToAdd:any = {name:tag,type:"",tagId:null};
        dtoToAdd.downloadDTOTagList.push(tagToAdd);
      }
      );
      delete dtoToAdd.tags;
      dtoToAdd.downloadDTORecipe.recipeId = null;
      dtoToAdd.downloadDTORecipe.recipeType = recipeType;
      // this.saveImage(dtoToAdd.downloadDTORecipe.img,dtoToAdd.downloadDTORecipe.name);
      dtoList.push(dtoToAdd);
    });

    console.log(dtoList);

    this.backupService.saveDbRecipes(dtoList).subscribe(dbResp =>{
      console.log(dbResp);
    });
  }

  saveImage(imageUrl,fileName){
    // https://github.com/eligrey/FileSaver.js/  
    this.FileSaver.saveAs(imageUrl, fileName);
  }
}