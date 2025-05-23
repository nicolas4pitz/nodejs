
import path from "path";
import {globby} from 'globby';
import {rename} from 'fs/promises';
import * as fs from 'node:fs/promises';


async function arrumar(ext, pasta) {
    const paths = await globby('bagunça', {
        expandDirectories: {
            files: ['*'],
            extensions: [ext]
        }
    });

    const fileNames = paths.map(p => path.basename(p));

    try {
        await fs.access(pasta);
    } catch {
        await fs.mkdir(pasta, { recursive: true });
    }

    for (let i = 0; i < paths.length; i++) {
        const source = paths[i];
        const destination = path.join(pasta, fileNames[i]);

        try {
            await rename(source, destination);
            console.log(`Moved file from ${source} to ${destination}`);
        } catch (error) {
            console.error(`Got an error trying to move the file: ${error.message}`);
        }
    }
}

arrumar('js', "codigos");