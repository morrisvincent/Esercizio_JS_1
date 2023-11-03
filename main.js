/* ESERCIZIO 1 */

let name = `Morris`
let age = 37;
let subject = `JavaScript`
let faveTeacher= `Valario Vacca`
let tot = `Ciao sono ${name}, ho ${age} e sto studiando ${subject} con il mio insegnante preferito ${FaveTeacher}!`

console.log(Tot);

/* ESERCIZIO 2 */

let number1 = 10;
let number2 = 15;
let number3 = 20;
let number4 = 25;
let number5 = 30;
let sum = number1 + number2 + number3 + number4 + number5
console.log(sum)

let media = sum/5;
console.log(media)

/* ESERCIZIO 3 */

let ac = 2023;
let anno_nasciata = 1986;
let age1 = ac - anno_nasciata;
console.log(age1)

let cento = 100 - age1;
console.log (cento)

let frase = `Hai ${age1} anni e ti mancano ${cento} anni per compierne 100`
console.log (frase)


/* ESERCIZIO 4 */

let gatti_tot = 44;
let gatti_fila = 6;
let file = gatti_tot/gatti_fila;
let file_piene_intere = Math.floor(file)
console.log(file_piene_intere);

let gatti_gia_in_fila = (gatti_tot-(file_piene_intere * gatti_fila));
/* let gatti_gia_in_fila = gatti_tot % gatti_fila */
console.log(gatti_gia_in_fila);

let gatti_mancanti_fila_da_riempire = gatti_fila - gatti_gia_in_fila;
console.log(gatti_mancanti_fila_da_riempire);

let frase2 = `Ci sono ${file_piene_intere} file di gatti e ne mancano ${gatti_mancanti_fila_da_riempire} per una nuova fila, con un avanzo di ${gatti_gia_in_fila}`
console.log(frase2)


