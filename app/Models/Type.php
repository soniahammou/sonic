<?php 
namespace Sonic\Models;
use Sonic\Utils\Database;
use \PDO;

class Type extends CoreModel {


    public function findAllByType(){
        $pdo = Database::getPDO();
        $sql = 'SELECT * FROM `type`';
        
        $query= $pdo->query($sql);
  
        $result = $query->fetchAll(PDO::FETCH_CLASS,self::class);
        return $result;
      }
  

}

 