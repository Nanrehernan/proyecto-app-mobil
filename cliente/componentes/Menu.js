import {useEffect, useState, Fragment, useContext} from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Separador from "./Separador";
import Contexto from "./Contexto"

const Menu = () => {
    const navigation = useContext(Contexto)
    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        getCategorias()
    }, [])

    const getCategorias = async ()=> {
        const url = "http://192.168.0.2:3000/ubicateya/api/categoria"
        const response = await fetch(url)
        const data = await response.json()

        if (response.status === 200) setCategorias(data)
    }

    const renderTiendas = (id_categoria)=> {
        navigation.navigate("tienda", {id_categoria: id_categoria})
    }

    return (
        <View style={styles.menuTiendas}>
            {
                categorias.map(categoria => (
                    <Fragment key={categoria.id}>
                        <TouchableOpacity style={styles.boton} onPress={()=> renderTiendas(categoria.id)}>
                            <Text style={styles.botonText}>{categoria.descripcion}</Text>
                        </TouchableOpacity>
                        <Separador />
                    </Fragment>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    menuTiendas: {
        flex: 1,
        alignItems: "center",
    },
    boton: {
        width: "85%",
        height: 40,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    botonText: {
        color: "#fff",
        fontSize: 20,
    },
    botonPolicia: {
        backgroundColor: "orange"
    }
});

export default Menu;
