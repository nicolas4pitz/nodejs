import http from 'http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { error } from 'console';
import { getDataByPathParams } from './utils/getDataByPathParams.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js';

const PORT = 8000;

//console.log(typeof destinations)

const animal = {
  type: "Elephant",
  nickName: "Joe"
}


//console.log(typeof JSON.stringify(animal))

const server = http.createServer(async (req, res) => {
  
  const urlObj = new URL(req.url, `http://${req.headers.host}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)

  console.log(queryObj)

  const destinations = await getDataFromDB();

  if(urlObj.pathname === "/api" && req.method === "GET"){
    const filteredDestinations = getDataByQueryParams(destinations, queryObj)
    sendJSONResponse(res, 200, filteredDestinations)

  }else if(req.url.startsWith("/api/continent")){

    let continent = req.url.split("/").pop()
    //console.log(result)
    const filteredData = getDataByPathParams(destinations, 'continent', continent) 
    sendJSONResponse(res, 200, filteredData)

  }else if(req.url.startsWith("/api/country")){

    let country = req.url.split("/").pop()
    //console.log(resultUrl)
    const filteredData = getDataByPathParams(destinations, 'country', country)
    sendJSONResponse(res, 200, filteredData)

  } else{
    sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }))
  }

}); 

server.listen(PORT, () => console.log(`Conexao aberta em ${PORT}`))
