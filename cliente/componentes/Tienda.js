import {useEffect} from "react"
import {Text} from "react-native"
const Tienda = ({navigation, route})=> {
    const {id_categoria} = route.params
    useEffect(()=>{
        getTiendasCategoria()
    }, [])

    const getTiendasCategoria = async ()=> {
        const url = `http://192.168.0.2:3000/ubicateya/api/tiendas/${id_categoria}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    return (
        <Text>Estamos en tienda</Text>
    )
}

export default Tienda