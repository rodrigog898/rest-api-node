const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')




const folder = process.argv[2] ?? '.'

async function ls (directorio) {
    let files
    try{
         files = await fs.readdir(folder)

    } 
    catch{
        console.error(pc.redBright(`no se ha podido leer la carpeta ${folder}`))
        process.exit(1)
    }
    
    const filepromisses = files.map(async file => {
        const filepath = path.join(folder , file)
        let stats
        try{
            stats =  await fs.stat(filepath)
        }
        catch{
            console.error(pc.red(`no se ha podido leer la carpeta ${folder}`))
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const filettype = stats.isDirectory ? 'd' : '-'
        const size = stats.size 


        return `${isDirectory} ${file} ${size.toString()}`

    })

    const filesinfo = await Promise.all(filepromisses)
    

    filesinfo.forEach(filesinfo => {
        console.log(filesinfo)
        
    });
    
}


ls(folder)
