# Sonic Project 

Side project conçu pour pratiquer l’architecture MVC en PHP, le javascript. Il s'agit d'un mini site avec un quizz sur les personnages de sonic.

## Fonctionnalités

### Backend (PHP)
Architecture MVC maison (sans framework).

Routing simple via index.php.

Connexion PDO à la base de données sonic.sql.


### Base de données

La modélisation de la base de données est fournie :

- [dictionnaire de données](docs/dictionnaire-de-donnees.md)
- [MCD](docs/S05-parcours-MCD.svg)

La base de données est fournie aussi : [fichier à importer](docs/sonic.sql)


### Frontend (HTML/CSS/JS)
Slider interactif sur la page d'accueil.

Thème sombre/clair (mode couleur).

Quizz en JavaScript autour de l’univers Sonic.

Styles personnalisés (reset + CSS ).




### Lancer le projet localement

### Prérequis

- PHP 8+
- Serveur local (XAMPP, MAMP, ou PHP CLI)
- MySQL


### Installation
``` 
git clone git@github.com:soniahammou/sonic.git && cd sonic

Importer la base de données depuis docs/sonic.sql

Créer un fichier config.ini 

composer install 

Lancer le serveur :
php -S localhost:8080 -t public

Accéder à :
http://localhost:8080
``` 