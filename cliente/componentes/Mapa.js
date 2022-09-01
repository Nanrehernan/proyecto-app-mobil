import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import Icon from "./Icon";

const mapStyle = [
    {
        featureType: "poi.attraction",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.business",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.government",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.medical",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.park",
        stylers: [
            {
                weight: 2,
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.place_of_worship",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.school",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi.sports_complex",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
];

const initialRegion = {
    latitude: -25.5129418,
    longitude: -54.6071079,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

const Mapa = ({ navigation }) => {
    const [listaTiendas, setListaTiendas] = useState([]);

    useEffect(() => {
        getListaTiendas();
    }, []);

    const getListaTiendas = async () => {
        const url = "http://192.168.0.2:3000/ubicateya/api/tiendas";
        const response = await fetch(url)
        const data = await response.json()

        if (response.status === 200){
            setListaTiendas(data)
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerMap}>
                <MapView
                    style={styles.mapa}
                    initialRegion={initialRegion}
                    customMapStyle={mapStyle}
                    zoomControlEnabled={true}
                >
                    {
                        listaTiendas.map(tienda => {
                            const coordenada = {
                                latitude: tienda.coordenada.x,
                                longitude: tienda.coordenada.y
                            }

                            return (
                                <Marker key={tienda.id} coordinate={coordenada} title={tienda.nombre} description={tienda.descripcion}>
                                    <Icon />
                                </Marker>
                            )
                        })
                    }
                </MapView>
            </View>
            <View style={styles.menu}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={styles.submenu}>Hoteles</Text>
                    <Text style={styles.submenu}>Restaurantes</Text>
                    <Text style={styles.submenu}>Baños Publicos</Text>
                    <Text style={styles.submenu}>Hoteles</Text>
                    <Text style={styles.submenu}>Restaurantes</Text>
                    <Text style={styles.submenu}>Baños Publicos</Text>
                    <Text style={styles.submenu}>Hoteles</Text>
                    <Text style={styles.submenu}>Restaurantes</Text>
                    <Text style={styles.submenu}>Baños Publicos</Text>
                </ScrollView>
            </View>
            <View style={styles.menuAtras}>
                <TouchableOpacity
                    style={styles.botonAtras}
                    onPress={() => navigation.navigate("menu")}
                >
                    <Entypo name="arrow-left" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
    },
    marker: {
        width: 15,
        height: 15,
        backgroundColor: "#00f",
        borderRadius: 20,
    },
    input: {
        position: "absolute",
        top: 35,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    containerMap: {
        flex: 1,
    },
    mapa: {
        width: "100%",
        height: "100%",
    },
    menu: {
        width: "100%",
        position: "absolute",
        top: 80,
        left: 0,
    },
    submenu: {
        padding: 10,
        marginEnd: 20,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 20,
    },
    textMenu: {
        color: "#f00",
        fontSize: 15,
        fontWeight: "bold",
    },
    menuAtras: {
        position: "absolute",
        top: 30,
        width: "100%",
    },
    botonAtras: {
        marginStart: 10,
        width: 30,
        height: 30,
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#f00",
    },
});

export default Mapa;
