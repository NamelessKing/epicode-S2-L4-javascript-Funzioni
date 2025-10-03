/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
function area(l1, l2) {
  return l1 * l2;
}
console.log("Area rettangolo: 5,3:", area(5, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log("Somma 3,3:", crazySum(3, 3));
console.log("Somma 3,4:", crazySum(3, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
function crazyDiff(n) {
  if (n > 19) {
    return Math.abs(n - 19) * 3;
  } else {
    return Math.abs(n - 19);
  }
}
console.log("Differenza 22:", crazyDiff(22));
console.log("Differenza 10:", crazyDiff(10));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("Boundary 50:", boundary(50));
console.log("Boundary 400:", boundary(400));
console.log("Boundary 10:", boundary(10));
console.log("Boundary 150:", boundary(150));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");
function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}
console.log(epify("Hello World"));
console.log(epify("EPICODE is great"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("Esercizio 6");
function check3and7(n) {
  if (n <= 0) {
    return false;
  }
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Check 21:", check3and7(21));
console.log("Check 10:", check3and7(10));
console.log("Check -3:", check3and7(-3));
console.log("Check 8:", check3and7(8));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse EPICODE:", reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");
function upperFirst(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log("Upper First:", upperFirst("hello world"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9");
function cutString(str) {
  if (str.length <= 2) {
    return "";
  } else {
    return str.slice(1, -1);
  }
}
console.log("Cut 'Hello':", cutString("Hello"));
console.log("Cut 'A':", cutString("A"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10");
function giveMeRandom(n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
}
console.log("Random Array (5):", giveMeRandom(5));
