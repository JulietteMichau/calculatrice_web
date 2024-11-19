let ecran = document.getElementById('ecran');

function ajouterChiffre(chiffre) {
    ecran.value += chiffre;
}

function ajouterOperation(operation) {
    ecran.value += operation;
}

function effacer() {
    ecran.value = '';
}

function calculer() {
    try {
        ecran.value = eval(ecran.value);
    } catch (error) {
        ecran.value = 'Erreur';
    }
}