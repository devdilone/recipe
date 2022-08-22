CREATE TABLE `recipebackup`.`recipe` ( `recipeId` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `img` VARCHAR(255) NOT NULL , PRIMARY KEY (`recipeId`)) ENGINE = InnoDB;

CREATE TABLE `recipebackup`.`tag` ( `tagId` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `type` VARCHAR(255) NOT NULL , PRIMARY KEY (`tagId`))

CREATE TABLE `recipebackup`.`ingredient` ( `ingredientId` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `type` VARCHAR(255) NOT NULL , PRIMARY KEY (`ingredientId`))

CREATE TABLE `recipebackup`.`recipe_tags` ( `recipe_tagid` INT NOT NULL AUTO_INCREMENT , `tagid` INT NOT NULL , `recipeid` INT NOT NULL , PRIMARY KEY (`recipe_tagid`))

ALTER TABLE recipe_tags
ADD FOREIGN KEY (tagid) REFERENCES tag(tagid);

ALTER TABLE recipe_tags
ADD FOREIGN KEY (recipeid) REFERENCES recipe(recipeid);

CREATE TABLE `recipebackup`.`recipe_ingredients` ( `recipe_ingredientsId` INT NOT NULL AUTO_INCREMENT , `recipeId` INT NOT NULL , `ingredientId` INT NOT NULL , PRIMARY KEY (`recipe_ingredientsId`))

ALTER TABLE recipe_ingredients
ADD FOREIGN KEY (ingredientId) REFERENCES ingredient(ingredientId);

ALTER TABLE recipe_ingredients
ADD FOREIGN KEY (recipeid) REFERENCES recipe(recipeid);

CREATE TABLE `recipebackup`.`user` ( `userid` INT NOT NULL AUTO_INCREMENT , `fname` VARCHAR(255) NOT NULL , `lname` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `uname` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`userid`))

CREATE TABLE `recipebackup`.`tag_likes` ( `tag_likeid` INT NOT NULL AUTO_INCREMENT , `tagid` INT NOT NULL , `userid` INT NOT NULL , `liketype` VARCHAR(255) NOT NULL , PRIMARY KEY (`tag_likeid`))
ALTER TABLE tag_likes
ADD FOREIGN KEY (tagid) REFERENCES tag(tagid);

ALTER TABLE tag_likes
ADD FOREIGN KEY (userid) REFERENCES user(userid);

CREATE TABLE `recipebackup`.`ingredient_likes` ( `ingredient_likesid` INT NOT NULL AUTO_INCREMENT , `userid` INT NOT NULL , `liketype` VARCHAR(255) NOT NULL , `ingredientid` INT NOT NULL , PRIMARY KEY (`ingredient_likesid`))

ALTER TABLE ingredient_likes
ADD FOREIGN KEY (ingredientid) REFERENCES ingredient(ingredientid);

ALTER TABLE ingredient_likes
ADD FOREIGN KEY (userid) REFERENCES user(userid);

CREATE TABLE `recipebackup`.`saved_recipes` ( `saved_recipesid` INT NOT NULL AUTO_INCREMENT , `recipeId` INT NOT NULL , `userId` INT NOT NULL , PRIMARY KEY (`saved_recipesid`))