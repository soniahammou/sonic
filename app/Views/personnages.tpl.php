<?php
$personnage = $viewData['personnage'];
$personnageType = $viewData['typeName'];

// dump($personnageType)
?>



<body>
  <section class="slider">  
    <button class="btn slider__btn" type="button" aria-label="Précédent">&lt;</button>
    <button class="btn slider__btn" type="button" aria-label="Suivant">&gt;</button>
  </section>


  <main class="main_content" role="main">
<!-- 
    <header class="main_content-header" role="heading">
      <section>
        <figure>
          <img src="/assets/images/header.jpg" alt="personnage de sonic" role="img">
        </figure>
      </section>
      <section>
        <h1> Les personnages de Sonic </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem vitae, rerum nulla debitis alias veniam necessitatibus minus molestias, recusandae voluptatem adipisci laudantium dolor enim veritatis vero odio! A, dolores ducimus recusandae soluta odit quae doloremque quidem magni sint dignissimos voluptate eligendi aperiam! Sequi omnis atque repellat fugit sunt vel explicabo quas sit. Nemo, nihil unde sit nesciunt harum deserunt. Quibusdam optio, excepturi, saepe architecto sunt sit blanditiis debitis odio minus ullam iure accusamus molestiae atque libero, a est eveniet? Dolores voluptate sequi repellendus. Dolor at nihil nemo earum impedit sit atque totam quasi cumque eaque, velit eum iusto nisi.</p>
      </section>
    </header> -->

    <section class="main_select-type">

      <div class="filters" aria-label="Filtres des résultats de recherche">
        <h2 class="segment__title">Les gentils VS Les méchants</h2>

        <span class="filter">
          <input type="checkbox" name="type" value="Gentils" id="type-Gentils" role="checkbox" checked>
          <label for="type-Gentils">Gentils</label>
        </span>
        <span class="filter">
          <input type="checkbox" name="type" value="Méchants" id="type-Méchants" role="checkbox" checked>
          <label for="type-Méchants">Méchants</label>
        </span>
        <button class="btn btn_select-type" type="button">
          <a href="#" role="link">ajouter une nouvelle catégorie</a>

        </button>
      </div>

    </section>

    <?php foreach ($personnage as $person) : ?>
      <?php foreach ($personnageType as $type) : ?>

        <?php
        $typeName = ($type->getName() === "Gentils") ? "Gentils" : "Méchants";
        if ($person->getType_id() === $type->getId() && $type->getName() === $typeName) : ?>

          <article class="main_content-article hover-card" data-type="<?= $type->getName(); ?>">
          <?php endif; ?>

        <?php endforeach; ?>

        <form action="" method="post" class="main_content-form">
          <label>Quels est le nom de ce personnage ?</label>
          <input class="quizz_personnage" placeholder="votre reponse" data-name="<?= $person->getName(); ?>" required>
          <button class="btn" type="submit">Valider</button>
        </form>

        <figure class="main_content-charachter">
          <img src="/assets/images/<?= $person->getPicture(); ?>" alt="personnage de sonic" role="img">
        </figure>

        <section class="content hidden">
          <h1> <?= $person->getName(); ?></h1>
          <p><?= $person->getDescription(); ?></p>

          <?php foreach ($personnageType as $type) : ?>
            <?php if ($person->getType_id() === $type->getId() && $type->getName() === "Gentils") : ?>
              <span class="article kind" id="data-type= <?= $type->getName(); ?>" aria-label="catégorie de l'article">
                <?= $type->getName(); ?>
              </span>
            <?php endif; ?>

            <?php if ($person->getType_id() === $type->getId() && $type->getName() === "Méchants") : ?>
              <span class="article bad" id="data-type= <?= $type->getName(); ?>" aria-label="catégorie de l'article">
                <?= $type->getName(); ?>
              </span>
            <?php endif; ?>

          <?php endforeach; ?>
        </section>




          </article>
        <?php endforeach; ?>


  </main>