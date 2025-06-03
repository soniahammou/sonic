<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/reset.css">
    <script src="https://kit.fontawesome.com/4b7e9d30eb.js" crossorigin="anonymous"></script>
    <title>Sonic - Le blog</title>
</head>

<body>

    <header class="header-nav" role="banner">

        <nav role="navigation">
            <ul role="navigation">
                <li id="header-logo" role="listitem">
                    <a href="<?= $router->generate('home'); ?>" role="link">
                        <img src="/assets/images/Sonic_logo.png" alt="personnage de sonic" role="img">
                    </a>
                </li>
                <?php  /* 
              <li role="listitem"><a href="<?= $router->generate('home'); ?>" role="link"> Super Sonic </a></li>
            
           <li role="listitem"><a href="<?= $router->generate('createurs'); ?>" role="link"> Les createurs</a></li>  */ ?> 
                <li role="listitem"><a href="<?= $router->generate('personnages'); ?>" role="link"> Super Quizz</a></li>

                <!-- cette classe n'est pas presente en css mais sera utile pour le js afin de cibler la bonne ancre -->
                <li role="listitem"> <a id="newsletter-anchor" href="" role="link"> Newsletter</a></li>
            </ul>


            <button role="switch" id="theme-switch" class="btn" type="button" aria-label="Changer le thème">
                <i class="fas fa-moon"></i>
            </button>

            <button role="switch" id="theme-green" class="theme-button" type="button" aria-label="Changer la couleur du thème"></button>
            <button role="switch" id="theme-red" class="theme-button" type="button" aria-label="Changer la couleur du thème"></button>
            <button role="switch" id="theme-blue" class="theme-button" type="button" aria-label="Changer la couleur du thème"></button>

        </nav>

    </header>