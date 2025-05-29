import Fastify from "fastify";
const fastify = Fastify({ logger: true });
import items from "./routes/items.js";
import "dotenv/config";
const port = parseInt(process.env.PORT) || 5000;

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

fastify.get("/", (req, reply) => {
  reply.send("Insira um cep");
});

fastify.get("/cep/:id", async (req, reply) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${id}/json/`);
    const data = await response.json()
    reply.type("application/json")
    reply.send(JSON.stringify(data))
  } catch (error) {
    reply.status(404).send({error: "Erro, cep não encontrado"})
  }
});

const start = async () => {
  try {
    await fastify.listen({ port });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
