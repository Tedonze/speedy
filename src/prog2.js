console.log(`Larchitecture de ce processeur est :${process.arch}`);
console.log (`le Pid du processus courant est  :${process.pid}`);
console.log (`le Pid du processus parent du processus  courant est:${process.ppid}`);
console.log (`le chemin d execution processus courant est  :${process.cwd()}`);
var os=require('os');
console.log (`Le systéme d exploitation courant  est  :${os.platform()}`);
console.log (`le chemin courant est:${__dirname}`);
console.log(`La version de nojs utilisée est :${process.version}`);


