
import items from "../items.js"

function itemsRoutes(fastify, options, done){

    fastify.get("/items", (req, reply) =>{
        reply.send(items)
    })
    
    fastify.get("/items/:id", (req, reply) =>{
        
        const {id} = req.params
    
        const item = items.find(item => item.id ===id)
        
        reply.send(item)
    })

    done()

}

export default itemsRoutes