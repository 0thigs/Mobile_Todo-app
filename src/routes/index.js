import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home"
import Todo from "../pages/todo";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name="Todo"
                component={Todo}
                options={{ headerShown: false}}
            />    
        </Stack.Navigator>
    )
}