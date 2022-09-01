const Conexion = require("./Conexion.class");

class CategoriaModel {
    static async getCategoria() {
        try {
            const sql = "select * from categoria";
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports = CategoriaModel;
