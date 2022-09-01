import {useContext} from "react"
import { View, TouchableOpacity, StyleSheet, Linking } from "react-native";
import {
    MaterialCommunityIcons,
    FontAwesome5,
    Feather,
} from "@expo/vector-icons";
import Contexto from "./Contexto";

const Footer = () => {
    const navigation = useContext(Contexto)
    return (
        <View style={styles.menuFooter}>
            <TouchableOpacity
                style={styles.botonFooter}
                onPress={() => navigation.navigate("mapa")}
            >
                <FontAwesome5 name="map-marked-alt" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonFooter}>
                <MaterialCommunityIcons
                    name="police-station"
                    size={20}
                    color="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botonFooter}
                onPress={() => Linking.openURL("tel:911")}
            >
                <Feather name="phone-call" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuFooter: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    botonFooter: {
        backgroundColor: "#000",
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Footer;
