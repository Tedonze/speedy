let fs = require('fs');
let writer=fs.createWriteStream(`text.txt`);
var readline=require(`readline`);
var Inter=readline.createInterface({
input:process.stdin,
output:process.stdout});
Inter.on(`line`,function(cmd){ writer.write(cmd);
Inter.close();});

