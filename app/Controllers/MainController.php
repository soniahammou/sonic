<?php

namespace Sonic\Controllers;

use Sonic\Models\Character;
use Sonic\Models\Type;

class MainController extends CoreController
{


    // Récupérer les données sur les personnages et leur type depuis la base de données

    public function home()
    {

        $personnageModel = new Character();
        $personnage = $personnageModel->findAll();



        $typeModel = new Type();
        $personnageType = $typeModel->findAllByType();

        $data['personnage'] = $personnage;
        $data['typeName'] = $personnageType;

        $this->show('home', $data);
    }


    public function createur()
    {

        $this->show('createur');
    }



    public function personnages()
    {
        $personnageModel = new Character();
        $personnage = $personnageModel->findAll();



        $typeModel = new Type();
        $personnageType = $typeModel->findAllByType();

        // $data['personnageType']= $personnageType;


        $data['personnage'] = $personnage;
        $data['typeName'] = $personnageType;
        $this->show('personnages', $data);
    }
}
