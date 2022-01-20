/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let userWord = prompt('Inserisci una parola per verificare se è palindroma').trim();


function isPalindrome(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(userWord))
