
const deb =process.hrtime.bigint();
var x=1000;
setTimeout(()=> {
const fin =process.hrtime.bigint(); 

console.log(`il s'est ecroulé un temps :${fin-deb} nanoseconde pour une attente de ${x} milliseconde`);

},x);





