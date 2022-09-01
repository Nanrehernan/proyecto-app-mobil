const Conexion = require("./Conexion.class");

class TiendaModel {
    static async getTiendas() {
        try {
            const sql = "select t.id as id, t.nombre as nombre, t.descripcion as descripcion, c.id as id_categoria, c.descripcion as categoria, t.coordenada as coordenada from tiendas as t join categoria as c on t.id_categoria=c.id";
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }

    static async getTiendasCategoria(id_categoria) {
        try {
            const sql = "select t.id as id, t.nombre as nombre, t.descripcion as descripcion, t.coordenada as coordenada, c.id as id_categoria, c.descripcion as categoria from tiendas as t join categoria as c on t.id_categoria=c.id where c.id=?"
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql, [id_categoria]);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports = TiendaModel;