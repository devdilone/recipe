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