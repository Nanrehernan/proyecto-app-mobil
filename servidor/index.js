const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

// Mis Importaciones
const CategoriaModel = require("./model/CategoriaModel.class")
const TiendaModel = require("./model/TiendaModel.class")
// -----------------

app.use(cors())
app.use(express.json())

app.get("/ubicateya/api/categoria", async (request, response)=>{
    const data = await CategoriaModel.getCategoria()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/ubicateya/api/tiendas", async (request, response)=> {
    const data = await TiendaModel.getTiendas()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/ubicateya/api/tiendas/:id_categoria", async (request, response)=> {
    const {id_categoria} = request.params
    
    const data = await TiendaModel.getTiendasCategoria(id_categoria)

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.listen(port, ()=>{
    console.log("Servidor arrancado en el puerto: " + port)
})