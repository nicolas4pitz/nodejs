import fastify from "fastify"

//Deu errado
export const sendJsonHeader = (res, statuscode, payload) =>{
  res.type("Content-Type", "application/json")
  res.status(statuscode) = statuscode
}