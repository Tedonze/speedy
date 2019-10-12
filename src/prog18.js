

function NombreParExtension(extension){
const{exec}=require(`child_process`)

exec(String('ls '+'*.'+extension+'|wc -l'),(error,stdout,stderr)=>
{ if(error) {
console.log(stderr);

} 
else
{ 
console.log(`le nombre de fichier dans le repertoire avec l'extension ${extension} est: ${stdout}`);
}}
);
}
NombreParExtension('txt');
