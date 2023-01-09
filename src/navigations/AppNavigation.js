// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import Login from "../screens/Login/Login.js";
// import SplashScreen from "../screens/Splash/SplashScreen.js";
// import Colors from "../constants/Colors";

// const Stack = createStackNavigator();

// function MainNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="SplashScreen"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: Colors.orange,
//         },
//         headerTitleStyle: {
//           fontWeight: "bold",
//           textAlign: "center",
//         },
//       }}
//     >
//       {/* <Stack.Screen name="MPM System" component={HomeScreen} /> */}
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         screenOptions={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Welcome"
//         component={SplashScreen}
//         screenOptions={{
//           headerShown: false,
//         }}
//       />
//       {/* <Stack.Screen name='Categories' component={CategoriesScreen}/>
//       <Stack.Screen name='Recipe' component={RecipeScreen}/>
//       <Stack.Screen name='RecipesList' component={RecipesListScreen} />
//       <Stack.Screen name='Ingredient' component={IngredientScreen} />
//       <Stack.Screen name='Search' component={SearchScreen} />
//       <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} /> */}
//     </Stack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();

// function DrawerStack() {
//   return (
//     <Drawer.Navigator
//       drawerPosition="left"
//       initialRouteName="Welcome"
//       // drawerStyle={{
//       //   width: 150,
//       //   backgroundColor:"red"
//       // }}
//       screenOptions={{ headerShown: false }}
//     //   drawerContent={({ navigation }) => (
//     //     <DrawerContainer navigation={navigation} />
//     //   )}
//     >
//       <Drawer.Screen name="Main" component={MainNavigator} />
//     </Drawer.Navigator>
//   );
// }

// export default function AppContainer() {
//   return (
//     <NavigationContainer>
//       <DrawerStack />
//     </NavigationContainer>
//   );
// }

// console.disableYellowBox = true;

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "../constants/Colors";
import Login from "../screens/Login/Login.js";
import SplashScreen from "../screens/Splash/SplashScreen.js";
import HomeScreen from "../screens/Home/HomeScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer.js";
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.orange,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen name="MPM System" component={HomeScreen} />
      <Stack.Screen
        name="Login"
        component={Login}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={SplashScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Welcome"
      // drawerStyle={{
      //   width: 150,
      //   backgroundColor:"red"
      // }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default AppContainer;
