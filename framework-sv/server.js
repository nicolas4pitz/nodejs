import Fastify from "fastify";
const fastify = Fastify({ logger: true });
import items from "./routes/items.js"
import 'dotenv/config'
const port = parseInt(process.env.PORT) || 5000

// fastify.register(items)
// const start = async () => {
//     try{
//         await fastify.listen({port})
//     } catch (error){
//         fastify.log.error("Teste" + error);
        
//         process.exit(1)
//     }
// }

// start()


fastify.get("/cep/:id", async (req, reply) => {

    const {id} = req.params

    //viacep.com.br/ws/id/json/

    try{
        const faze = fetch(`https://viacep.com.br/ws/${id}/json/`)
    } catch (error){
        console.log("Erro: " + error)
    }
    

    //const cep = cep.find

    reply.send(`Teste ${faze}`  + id + "\n")

})


const start = async () =>{
    try{
        await fastify.listen({port})
    } catch(error){
        fastify.log.error("Teste " + error)
        process.exit(1)
    }
}

start()