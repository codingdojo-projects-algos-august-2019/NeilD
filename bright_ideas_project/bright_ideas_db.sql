-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bright_ideas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bright_ideas` ;

-- -----------------------------------------------------
-- Schema bright_ideas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bright_ideas` DEFAULT CHARACTER SET utf8 ;
USE `bright_ideas` ;

-- -----------------------------------------------------
-- Table `bright_ideas`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bright_ideas`.`users` ;

CREATE TABLE IF NOT EXISTS `bright_ideas`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `alias` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bright_ideas`.`bright_ideas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bright_ideas`.`bright_ideas` ;

CREATE TABLE IF NOT EXISTS `bright_ideas`.`bright_ideas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_bright_ideas_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_bright_ideas_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `bright_ideas`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bright_ideas`.`likes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bright_ideas`.`likes` ;

CREATE TABLE IF NOT EXISTS `bright_ideas`.`likes` (
  `user_id` INT(11) NOT NULL,
  `bright_idea_id` INT(11) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  INDEX `fk_users_has_bright_ideas_bright_ideas1_idx` (`bright_idea_id` ASC) VISIBLE,
  INDEX `fk_users_has_bright_ideas_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_bright_ideas_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bright_ideas`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_bright_ideas_bright_ideas1`
    FOREIGN KEY (`bright_idea_id`)
    REFERENCES `bright_ideas`.`bright_ideas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
