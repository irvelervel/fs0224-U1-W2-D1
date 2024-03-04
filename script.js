console.log('hello world!')

// Il mestiere del developer si incentra sulla RISOLUZIONE di problemi! Ovvero nella creazione di ALGORITMI.
// Un algoritmo è una serie di passaggi, numerati, che porta alla risoluzione di un problema.
// Un algoritmo, se il problema non cambia, vi porterà sempre alla stessa soluzione!

// Al fine di scrivere un algoritmo, sarà quasi sempre necessario ricorrere alla creazione di VARIABILI.
// Una variabile è un'allocazione di memoria dedicata alla memorizzazione di un valore (di un dato).
// possiamo immaginarla come una scatola che contiene qualcosa, o una bacinella che contiene un ingrediente
// nella realizzazione di una ricetta.

// VARIABILI
// Una variabile innanzitutto va DICHIARATA! Poi, può venire UTILIZZATA.
// Le variabili in JS vengono dichiarate con la parola chiave "let"
let dog // dichiaro una variabile di nome "dog"
// Al momento questa variabile NON HA VALORE (è "vuota"). È stata dichiarata, ma non è stato assegnato nessun valore.
dog = 'Fido' // riempio la variabile che era vuota con la parola "Fido"

let cat = 'Tom' // potete fare entrambe le operazion in una sola riga

let number = 35

// TIPI DI VALORI POSSIBILI PER UNA VARIABILE:
// stringhe -> es. 'Stefano', 'Tom', 'Una frase molto lunga', etc.
// numero -> es. 5, 100, 0.15, 10000
// booleano -> true, false
// undefined
// null

let variabileWithNullValue = null

let anotherNumber = 100.1 // notare l'assenza di apici o virgolette!

let canYouDrive = true // notare l'assenza di apici o virgolette!

// si chiamano VARIABILI perchè il loro VALORE può cambiare nel corso del tempo!
canYouDrive = false
anotherNumber = 0
// anotherNumber = null

// va benissimo cambiare il VALORE di una variabile, ma dovete fare attenzione a NON cambiarne il TIPO!
// canYouDrive = 'Jerry'
// number = 'Stefano'
// queste due righe, anche se in JS non rappresentano un errore sintattico, sono ALTAMENTE SCONSIGLIATE
// in quanto in altri linguaggi (es. Java, es. C#, etc.) NON SONO VALIDE
// NON ABITUIAMOCI a cambiare il TIPO di una variabile!!!

// una variabile si DICHIARA una volta sola!
// let anotherNumber = 50 --> errore, anotherNumber è GIÀ stata dichiarata!
anotherNumber = 50
// una variabile dichiarata poi può venirne cambiate il valore infinite volte

// ESEMPI meno ovvi :)
let number1 = 15
let number2 = 20
let number3 = number1 + number2 // 35
console.log('valore di number3', number3) // con un console.log noi "apriamo" una scatola e ne verifichiamo il contenuto

number3 = number3 - 35 // 35-35 --> 0
// number3 è 0 :)
console.log('ora ho sottratto 35 a number3 e il suo valore è', number3)

number3 = number3 + 10 // 10
number3 = number3 / 5 // 2
number3 = number3 * 2 // 4
console.log('dopo varie operazioni', number3)

console.log(number3 % 3) // questo è l'operatore MODULO, torna il RESTO della divisione!

// l'operatore + con le stringhe effettua un'operazione di CONCATENAZIONE
let myName = 'Stefano'
let mySurname = 'Casasola'
let fullName = myName + ' ' + mySurname // 'Stefano Casasola'

let falseNumber1 = '50'
let falseNumber2 = '50'
let falseSum = falseNumber1 + falseNumber2 // ?
console.log(falseSum) // '5050'

let newVariable = 100
console.log(newVariable) // errore! sto cercando di accedere alla variabile newVariable prima della sua dichiarazione!

let a = 10
let b = a // 10
let c = a + b // 10 + 10 -> 20

let d = 10
let e = d // 10
d = 30
let f = d + e // 30 + 10 -> 40

// alert(f) // apre un fastidioso popup con come contenuto 40 :)

// COSTANTI
// una costante è una variabile che NON PUÒ venire riassegnata in un secondo momento
// una costante si dichiara con la parola "const"

const epicodeUrl = 'https://www.epicode.com'
// perchè usare const invece che let?
// due motivi
// 1) volete creare una variabile di cui è IMPOSSIBILE cambiare il valore, neanche per sbaglio!
// epicodeUrl = 'Steafno' <- genera errore
// 2) è una dichiarazione più "economica", una const pesa meno di una let a livello di memoria occupata

// OPERATORI DI ASSEGNAZIONE
// il più classico è l'=
// assegna il valore a dx dell'uguale alla variabile definita a sx dell'uguale
let numero1 = 5
let numero2 = numero1 // numero2 vale sempre 5

// varianti sul tema:
numero2 += 8 // si legge: numero2 = numero2 + 8
numero2 -= 2 // si legge: numero2 = numero2 - 2

// OPERATORI DI COMPARAZIONE
let n1 = 100
let n2 = 70

console.log(n1 > n2) // true
console.log(n1 < n2) // false

let n3 = 70
console.log(n2 < n3) // false (n2 non è minore di n3)
console.log(n2 > n3) // false (n2 non è maggiore di n3)
console.log(n2 === n3) // true (n2 è uguale a n3)

console.log(n1 + n3 === 169) // false, perchè la somma di n1 + n3 darebbe 170

console.log(n2 <= n3) // true
console.log(n2 >= n3) // true

console.log(n2 !== n3) // verifico che n2 sia diverso da n3 -> false

let canIDrive = true
console.log(!canIDrive) // false

// OPERATORI LOGICI
// gli operatori logici concatenano multiple comparazioni

// OPERATORE OR
// avete un e-commerce e volete offrire un incentivo per i nuovi iscritti
// il primo ordine ottiene sempre spedizione gratuita
// però anche se il carrello è >50 la spedizione e gratuita

let cartValue = 40.5
let firstOrder = true

let shippingCost = 10

let total =
  firstOrder === true || cartValue >= 50 ? cartValue : cartValue + shippingCost

// operatore ternario ? :
// si può assegnare un valore ad una variabile in modo condizionale utilizzando l'operatore ternario
// condizione ? valore se true : valore se false

// total dovrebbe valere solo quanto il carrello (spedizione grauite)
console.log('TOTAL', total) // 40.5

// il totale dell'ordine sarà pari al cartValue + eventualmente le spese di spedizione...
// le spese di spedizione però sono scontate se:
// 1) firstOrder sia uguale a true
// 2) cartValue >= 50

console.log(firstOrder === true || cartValue >= 50) // queste due condizioni sono collegate da un OR ( || )
// la riga sopra è TRUE
// l'operatore OR ||, inserito tra due condizioni, valuta tutta la riga TRUE se anche solo UNA delle condizioni è TRUE

// OPERATORE AND
// situazione del viaggio in macchina: per andare da Milano a Torino hai bisogno che:
// 1) la tua macchina ci sia e sia funzionante
let workingCar = true
// 2) che tu abbia una patente B
let BDrivingLicense = false

console.log(workingCar === true && BDrivingLicense === true)
// la riga sopra è FALSE, perchè avremmo la macchina funzionante ma non abbiamo la patente!

// OR
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

console.log(
  (workingCar === true && BDrivingLicense === true) ||
    firstOrder === true ||
    cartValue >= 50
)
// ((true && false) || (true || false)
// (false || true)
// -> true
