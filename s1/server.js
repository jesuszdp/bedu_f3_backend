//Forma 1
/*let principal = require('./principal');

principal.sumarFn(5,7);
*/

//Forma 2
let { sumarFn, restarFn, multiplicarFn, dividirFn } = require('./principal');

sumarFn(5,7);
restarFn(5,7);
multiplicarFn(5,7);
dividirFn(5,7);