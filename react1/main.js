// OPERADOR ||
console.log(false || {}); // Da {} porque el primero es falso y en OR en ese caso siempre mira el segundo
console.log("string" || true); //Da string porque el primero es true y en OR en ese caso siempre mira el primero
console.log([] || 100); // Da [] porque el primero es true y en OR en ese caso siempre mira el primero
console.log(null || "Prueba"); // Devuelve Prueba dado que un array vacío lo lee como false
console.log("" || true); //Devuelve true dado que un array vacío lo lee como false y pasa al siguiente
console.log(undefined || false); // Dado que ambas son falsas devuelve el primero que es undefined

// Operador &&
console.log(false && {}); // Da false porque el primero es falso y en AND para que te pinte true deben cumplirse que ambos lo sean. 
console.log("string" && true); // Da true porque ambos son true y en AND cuando ambos lo son se queda con el segundo.
console.log([] && 100); // Da 100 porque ambos son true y se queda con el segundo
console.log("" && true); // Da false porque un "" lo reconoce como false y se queda con ese.
console.log(undefined && false); //undefined ya que ambos son false y se queda con el primero

// Operador ??
console.log(false ?? {}); // Da false porque lo lee como true y se queda con el primero.
console.log("string" ?? true); // Da string porque lo lee como true y se queda con el primero.
console.log([] ?? 100); // Da [] porque lo lee como true y se queda con el primero.
console.log(null ?? "Prueba"); // Da Prueba porque lee el null y decide leer el siguiente 
console.log("" ?? true); // Da "" porque lo lee como true y se queda con el primero.
console.log(undefined ?? false); // Da false porque lee el null y decide leer el siguiente y pinta false lo lee como true