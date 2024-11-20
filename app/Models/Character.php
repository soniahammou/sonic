<?php 
namespace Sonic\Models;
use Sonic\Utils\Database;
use \PDO;

class Character extends CoreModel {

   private $description;
   private $picture;
   private $type_id;


    //Les Actives Records : transformer en objet de la class Personnage

    public function findAll(){
      $pdo = Database::getPDO();
      $sql = 'SELECT `character`.* FROM `character` ORDER BY `name` ASC';
      $query= $pdo->query($sql);

      $result = $query->fetchAll(PDO::FETCH_CLASS,self::class);
      // dump($result);
      return $result;

    }
    public function find($id){
      $pdo = Database::getPDO();
      $sql = 'SELECT `character`.* FROM `character`WHERE `id_type`='.$id;
      $query= $pdo->query($sql);

      $result = $query->fetchAll(PDO::FETCH_CLASS,self::class);
      dump($result);
      return $result;

    }
   /**
    * Get the value of type_id
    */ 
   public function getType_id()
   {
      return $this->type_id;
   }

   /**
    * Set the value of type_id
    *
    * @return  self
    */ 
   public function setType_id($type_id)
   {
      $this->type_id = $type_id;

      return $this;
   }

   /**
    * Get the value of picture
    */ 
   public function getPicture()
   {
      return $this->picture;
   }

   /**
    * Set the value of picture
    *
    * @return  self
    */ 
   public function setPicture($picture)
   {
      $this->picture = $picture;

      return $this;
   }

   /**
    * Get the value of description
    */ 
   public function getDescription()
   {
      return $this->description;
   }

   /**
    * Set the value of description
    *
    * @return  self
    */ 
   public function setDescription($description)
   {
      $this->description = $description;

      return $this;
   }
}
