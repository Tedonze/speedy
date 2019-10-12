const{exec}=require(`child_process`);
exec(`ls -l|wc -l`,(error,stdout,stderr)=>
{ if(error) {
console.log(stderr);

} 
else
{ 
console.log(`le nombre de fichier dans le repertoire est: ${stdout}`);
}}
);

