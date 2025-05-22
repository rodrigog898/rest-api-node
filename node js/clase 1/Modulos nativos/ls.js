const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if (err){
        console.log('Error en la recupecuperancion de archivos ', err)

    }

    files.forEach(files => {
        console.log(files)
    }

    )
})


// Dos formas de hacerlo 

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file);
    });
  })
  .catch(err => {
    console.error('Error al leer el directorio: ', err);
  });
