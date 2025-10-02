// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 1:");
function giveMeRandom(){
    let randomNumbers = [];
   for (let i = 0; i < 10; i++) {
       randomNumbers.push(Math.floor(Math.random() * 11));
   }
   return randomNumbers;
}
function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log(arr[i] + " è maggiore di 5");
            sum += arr[i];
        } else {
            console.log(arr[i] + " non è maggiore di 5");
        }
    }
    return sum;
}
let randomArray = giveMeRandom();
console.log("Array generato:", randomArray);
let total = checkArray(randomArray);
console.log("Somma dei valori maggiori di 5:", total);


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 2:");
let shoppingCart = [
    { price: 10, name: "Item 1", id: 1, quantity: 2 },
    { price: 15, name: "Item 2", id: 2, quantity: 1 },
    { price: 5, name: "Item 3", id: 3, quantity: 5 }
];
function shoppingCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}
console.log("Totale carrello:", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 3:");
function addToShoppingCart(cart, newItem) {
    cart.push(newItem);
    return cart.length;
}
let newItem = { price: 20, name: "Item 4", id: 4, quantity: 3 };
let newTotalItems = addToShoppingCart(shoppingCart, newItem);
console.log("Nuovo totale elementi nel carrello:", newTotalItems);
console.log("Carrello aggiornato:", shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 4:");
function maxShoppingCart(cart) {
    if (cart.length === 0) return null;
    let maxItem = cart[0];
    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > maxItem.price) {
            maxItem = cart[i];
        }
    }
    return maxItem;
}
let mostExpensiveItem = maxShoppingCart(shoppingCart);
console.log("Oggetto più costoso nel carrello:", mostExpensiveItem);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 5:");
function latestShoppingCart(cart) {
    if (cart.length === 0) return null;
    return cart[cart.length - 1];
}
let lastItem = latestShoppingCart(shoppingCart);
console.log("Ultimo oggetto nel carrello:", lastItem);


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 6:");
function loopUntil(x) {
    if (x < 0 || x > 9) {
        console.log("Il numero deve essere tra 0 e 9.");
        return;
    }
    let count = 0;
    while (count < 3) {
        let randomNum = Math.floor(Math.random() * 10);
        console.log("Numero casuale:", randomNum);
        if (randomNum > x) {
            count++;
        } 
    }
}
loopUntil(5);


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 7:");
function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}
let mixedArray = [10, "hello", 20, null, 30, undefined, "world", 40];
console.log("Media aritmetica:", average(mixedArray));


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 8:");
function longest(arr) {
    if (arr.length === 0) return null;
    let longestStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i];
        }
    }
    return longestStr;
}
let stringArray = ["short", "medium", "a very long string", "tiny", "longer"];
console.log("Stringa più lunga:", longest(stringArray));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 9:");
function isNotSpam(emailContent) {
    let lowerContent = emailContent.toLowerCase();
    return !lowerContent.includes("spam") && !lowerContent.includes("scam");
}
console.log("Check 'Hello World':", isNotSpam("Hello World"));
console.log("Check 'This is SPAM':", isNotSpam("This is SPAM"));
console.log("Check 'Beware of SCAM':", isNotSpam("Beware of SCAM"));
console.log("Check 'No issues here':", isNotSpam("No issues here"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 10:");
function daysSince(date) {
    let now = new Date();
    let past = new Date(date);
    let diffTime = Math.abs(now - past);
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
let pastDate = "2023-01-01";
console.log("Giorni passati dal", pastDate + ":", daysSince(pastDate));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("EXTRA 11:");
function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        let row = [];
        for (let j = 0; j < y; j++) {
            row.push(i.toString() + j.toString());
        }
        matrix.push(row);
    }
    return matrix;
}
console.log("Matrice 3x2:", matrixGenerator(3, 2));
console.log("Matrice 4x3:", matrixGenerator(4, 3));
