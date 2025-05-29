import Fastify from "fastify";
const fastify = Fastify({ logger: true });

import 'dotenv/config'

const port = parseInt(process.env.PORT) || 5000




const start = async () => {
    try{
        await fastify.listen({port})
    } catch (error){
        fastify.log.error("Teste " + error);
        
        process.exit(1)
    }
}

fastify.get("/items", (req, res) => {
  res.send({test: "Hello"})
})

start()