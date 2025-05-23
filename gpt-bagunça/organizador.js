

import {globby} from 'globby';
import {rename} from 'fs/promises';


async function arrumar(ext, pasta) {
    const paths = await globby('bagunça',{
        expandDirectories: {
            files: ['*'],
            extensions: [ext]
        }
    });

    for(let i = 0; i < paths.length; i++){
        try{
            await rename(paths[i], pasta + "/" + paths.values)
            console.log(`Moved file from ${source} to ${destination}`);
        } catch (error){
            console.error(`Got an error trying to move the file: ${error.message}`)
        }
        
    }
    

    console.log(paths)
}


arrumar('docx', "documento")




// console.log(path.resolve("bagunça" ,"foto.jpg"))

// console.log(__dirname) //gpt-bagunça
// console.log(__filename) //gpt-bagunça/organizador.js