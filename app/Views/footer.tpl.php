


  <!-- L'élément <aside> (en français, « aparté »eprésente une partie d'un document 
  dont le contenu n'a qu'un rapport indirect avec le contenu principal du document-->
  <aside class="newsletter ">
    <!-- , &Cross; est une entité de caractère appelée "multiplication sign" (signe de multiplication).
  Il affiche un symbole de croix (✕) lorsque le code HTML est interprété par le navigateur. -->
    <button class="newsletter__close btn" aria-label="Fermer" type="button">&Cross;</button>

    <h2 class="newsletter__title">Inscription à la newsletter</h2>
    <form action="" method="post">
      <input class="newsletter__field" type="email" id="subscriber-email" placeholder="user@email.com" aria-label="Votre email" required>
      <button class="btn" type="submit">Valider</button>
    </form>

    
  </aside>


<footer class="footer_content" role="contentinfo">
    <nav>
        <ul>
            <li><a href="<?= $router->generate('home'); ?>"> Super Sonic </a></li>
            <li><a href="<?= $router->generate('createurs'); ?>"> Les createurs</a></li>
            <li><a href="#"> Mentions Légales</a></li>
        </ul>
    </nav>
</footer>

</body>

</html>

<script type="module" src="/js/app.js"></script>

<!-- <script>
    const absolutURL = "<?php echo $absolutURL; ?>";
</script> -->