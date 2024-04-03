import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category } from "./pages/Category";
import { Meal } from "./pages/Meals";
import { MealDetail } from "./components/MealDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Category}/>
        <Stack.Screen name="Meals" component={Meal}/>
        <Stack.Screen name="MealDetail" component={MealDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
