<?php

// fichier index.php : FrontController, point d'entrée UNIQUE de notre application !

// on inclut le fichier autoload.php de Composer pour charger toutes nos dépendances
require_once __DIR__ . '/../vendor/autoload.php';
$NAMESPACE_CONTROLLERS = 'Sonic\Controllers\\';
// $_SERVER['BASE_URI'] = '/S05/S05-parcours-sonic-soniahammou/public';

// ================
// ROUTER
// ================

// on instancie AltoRouter
$router = new AltoRouter();

// on doit définir le dossier dans lequel se trouve notre projet
if (array_key_exists('BASE_URI', $_SERVER)) {
	// Alors on définit le basePath d'AltoRouter
	$router->setBasePath($_SERVER['BASE_URI']);
	// ainsi, nos routes correspondront à l'URL, après la suite de sous-répertoire
} else { // sinon
	// On donne une valeur par défaut à $_SERVER['BASE_URI'] car c'est utilisé dans le CoreController
	$_SERVER['BASE_URI'] = '/';
}


// page d'accueil
$router->map('GET', '/', [
    'controller' => 'MainController',
    'method' => 'home'
], 'home');

// route-
$router->map('GET', '/catalogue/createurs', [
    'controller' => 'MainController',
    'method' => 'createur'
], 'createurs');


// route-
$router->map('GET', '/catalogue/personnages', [
    'controller' => 'MainController',
    'method' => 'personnages'
], 'personnages');


// ================
// DISPATCHER
// ================

// on demande à AltoRouter de "matcher" la requête de l'utilisateur avec les routes mappées précédemment
$match = $router->match();

if (false != $match) {

            $target = $match['target'];	
            // ['controller'=>"MainController",	
            $controllerName = $NAMESPACE_CONTROLLERS .$target['controller'];
            //'method' => 'mentionsLegales'],
            $methodName = $target['method'];
    
            $controller = new $controllerName();
    
            $params = $match['params'];// Récupérer tous les paramètres dynamique de l'URL
            $controller->$methodName($params); // Appel de la méthode du constructeur
    
        } else {
            echo 'Route error';
        }
    