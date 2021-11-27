import {webpack} from 'webpack';
import {dotenv} from 'dotenv';
import fs from 'fs';
import path from 'path';

const webpack = (env) =>{
    const currentPath = path.join(_dirname);

    const basePath = currentPath + '/.env';

    const envPath = basePath + '.' + env.ENVIRONMENT;

    const finalPath = fs.existsSync(envPath) ? envPath : basePath;
    
    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    const envKeys = Objet.keys(fileEnv).reduce((prev,next)=>{
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    },{});

    return {
        plugins: [
            new webpack.DefinePlugin(envKeys)
        ]
    }
}