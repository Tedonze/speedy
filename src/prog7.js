setInterval(()=>{console.log("Bienvenue à l'ecole polytehnique de Yaounde");},10)
process.on('SIGINT', () => {
  console.log(' A bientot');
process.exit();
});

