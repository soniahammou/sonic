<?php 

namespace Sonic\Controllers;





class CoreController
{
    /**
	 * Charge le template demandé + le header et le footer
	 *
	 * @param string $viewName nom du template à charger
	 * @param array $viewData tableau des données à présenter dans les tamplates
	 * @return void
	 */
	
 
     protected function show($viewName, $viewData = [])
     {
 
         global $router;
         $absolutURL = $_SERVER['BASE_URI'];

         require_once __DIR__ . '/../Views/header.tpl.php';

         // 2. J'ai dans $viewname le nom de la page demandée par le visiteur grâce a l'appel de la methode 
         require_once __DIR__ . '/../Views/' . $viewName . '.tpl.php';
         // 3. Charger le pied de page
         require_once __DIR__ . '/../Views/footer.tpl.php';
     }
        }
    