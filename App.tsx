const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./screens/HomePage";
import UserProfile from "./screens/UserProfile";
import UserAccount from "./screens/UserAccount";
import Success from "./screens/Success";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import SingleProduct from "./screens/SingleProduct";
import Wishlist from "./screens/Wishlist";
import Tops from "./screens/Tops";
import ShopByCategory from "./screens/ShopByCategory";
import Search from "./screens/Search";
import Category from "./screens/Category";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserAccount"
              component={UserAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wishlist"
              component={Wishlist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tops"
              component={Tops}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShopByCategory"
              component={ShopByCategory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={Category}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
