var readline=require(`readline`);
var Inter=readline.createInterface({
input:process.stdin,
output:process.stdout});
Inter.on(`line`,function(cmd){console.log('vous aviez entré :'+cmd);

Inter.close();});

