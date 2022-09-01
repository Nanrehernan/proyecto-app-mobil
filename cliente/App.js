import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contenedor from "./componentes/Conetenedor";
import Mapa from "./componentes/Mapa";
import Tienda from "./componentes/Tienda"
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="menu" component={Contenedor} />
                <Stack.Screen name="mapa" component={Mapa} />
                <Stack.Screen name="tienda" component={Tienda} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
