const MYSQL = require("promise-mysql")

const mysqlConfig = {
    host: "localhost",
    port: 3306,
    user: "hernangarcete",
    password: "personal05",
    database: "ubicateya"
}

class Conexion{
    static async getConexion(){
        return await MYSQL.createConnection(mysqlConfig)
    }
}

module.exports = Conexion