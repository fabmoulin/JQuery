// Cela permet d'empêcher tout code jQuery de s'exécuter avant que le document ne soit chargé (est prêt).
$(function(){
    // -------- AU CLIC SUR LE BOUTON --------------
    $('#calculate').click(function(){ //je déclare ma fonction au clic sur le bouton
      // Je stocke dans des variables la valeur des 5 input avec les notes
      var firstNumber = $('#francais').val();
      var secondNumber = $('#anglais').val();
      var thirdNumber = $('#maths').val();
      var fourthNumber = $('#histgeo').val();
      var fifthNumber = $('#philo').val();
    
    // j'utilise parsefloat pour transformer les chaines de caractères renvoyées par .val en valeur numérique
      var result = ((parseFloat(firstNumber) + parseFloat(secondNumber) + parseFloat(thirdNumber) + parseFloat(fourthNumber) + parseFloat(fifthNumber)) /5);

      //je regarde le resultat final (la moyenne des 5 notes entrées par l'utilisateur)
      if (result >=0 && result <10) { //Si le resultat de la moyenne est > ou = à 0 et < 10
        alert('En dessous de la moyenne' + result); //J’affiche une alert avec le message "En dessous de la moyenne"
      } 
      else if (result >=10 && result <13) { //Ou si le résultat de la moyenne est > ou = à 10 et < 13
        alert('Moyen' + result);    // J’affiche une alert avec le message "Moyen"
      } 
      else if (result >=13 && result <16) { // ou si le résultat de la moyenne est > ou = à 13 et < 16
        alert('Bien' + result);   // J’affiche une alert avec le message "Bien"
      } 
      else if (result >=16 && result <20) {// ou si le résultat de la moyenne est > ou = à 16 et < 20 
        alert('Très bien' + result);// J’affiche une alert avec le message "Bien"
      } 
      else if (result == 20) { // ou si le résultat de la moyenne est = 20
      alert('Excellent' + result);// J’affiche une alert avec le message "Excellent"
      }
    });
  });
