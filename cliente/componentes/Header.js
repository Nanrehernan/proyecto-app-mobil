import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textoHeader}>Ubicate Ya</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textoHeader: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 5,
    },
});

export default Header;
