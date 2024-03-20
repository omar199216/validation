<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="get">


        <div class="child text-validation">Validation Form</div>

        <div class="child">
            <input type="text" name="nomPrenom" id="" placeholder="Nom & Prénom" />
            <?php
    if(isset($_GET['nomPrnom'])) {  
        if(empty($_GET['nomPrenom'])){
          echo '<p class="danger">Le champ Nom et Prenom est vide.</p>'; 
         }}
       ?>
        </div>
        <div class="child">
            <input type="text" name="mail" id="" placeholder="Adresse Mail" />

            <?php


//validation des données Mail
if(isset($_GET['mail'])){
if(!filter_var($_GET["mail"], FILTER_VALIDATE_EMAIL)) {
  echo "<p class='danger'>Saisir une adresse mail valide!!</p>";
}}
?>


        </div>
        <div class="child genre">
            <div>
                <label for="">Genre</label> <input type="radio" name="genre" value="Homme" /> Homme
                <input type="radio" name="genre" value="Femme" /> Femme
            </div>
            <div>
                <?php

            if(!isset( $_GET['genre'])) {
                  echo '<p class="danger   ">Vous devez selectionner un genre !</p>' ;
               }
             ?></div>
        </div>

        <div class="child ville">
            <label for="">Ville</label>
            <select name="" id="">
                <option value="">Casablanca</option>
                <option value="">Rabat</option>
                <option value="">Fes</option>
            </select>
        </div>
        <div class="child">
            <textarea name="Commentaire" id="" cols="20" rows="10"></textarea>
            <?php
if(isset($_GET['Commentaire'])){
  if(strlen($_GET["Commentaire"])<10)
{
  echo '<p class="danger">Saisir un texte de 10 lettres !</p>' ;
}}
            ?>
        </div>
        <div class="child langues">
            <div> <label for="">Langues</label>
                <input type="checkbox" name="francais" value="Francais"> Francais
                <input type="checkbox" name="anglais" value="Anglais" /> Anglais
            </div>

            <div>
                <?php
            if(!isset( $_GET['francais']) && !isset($_GET["anglais"])) {
                   echo '<p class="danger   ">Cochez au moins une langue !</p>' ;
               }
             ?></div>
        </div>
        <div class="child">
            <input type="submit" value="Validation Form" />


        </div>


    </form>

</body>

</html>