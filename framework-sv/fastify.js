import Fastify from "fastify";
const fastify = Fastify({ logger: true });

const tt = 5000

import 'dotenv/config'

const port = parseInt(process.env.PORT)

const start = async () => {
    try{
        await fastify.listen(tt)
    } catch (error){
        fastify.log.error("Teste" + error);
        
        process.exit(1)
    }
}

start()