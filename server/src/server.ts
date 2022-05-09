import express = require('express')
import cors = require('cors')
import { routes } from './routes'

const app = express()

app.use(cors()) // controle de segurança, ant front end (por enquanto esta aberto) 
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server runnig!')
})






//GET, POST, PUT, PATH, DELETE
// GET = buscar informações 
// POST = cadastrar informações
//PUT = atualizar informações de uma entidade 
// PATCH = atualizar uma informação única de uma entidade
// DELETE = deletar uma informação