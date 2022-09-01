import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Contexto from "./Contexto";

const Contenedor = ({ navigation }) => {
    return (
        <Contexto.Provider value={navigation}>
            <View style={styles.contenedor}>
                <Header />
                <Menu />
                <Footer />
            </View>
        </Contexto.Provider>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
});

export default Contenedor;
