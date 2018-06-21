/*Déclaration fonction identité*/
function identity() {
/*Déclaration des variable*/
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
/*Boite de dialogue avec appel des variables*/
  if((/[a-zA-Z\-éèîç]+/.test(lastname) == true) /*A compléter*/){
    alert('Nom: ' + lastname + '\nPrenom: ' + firstname + '\nVille: ' + city);
  }
  else{
    alert('Recommencez sans les chiffres');
  }
}
