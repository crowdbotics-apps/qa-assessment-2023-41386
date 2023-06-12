import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { configureStore, createReducer, combineReducers } from "@reduxjs/toolkit";
import { screens } from "@screens";
import { modules, reducers, hooks, initialRoute } from "@modules";
import { connectors } from "@store";
const Stack = createStackNavigator();
import { GlobalOptionsContext, OptionsContext, getOptions } from "@options";
import backIcon from './screens/contact-us/icons8-back-50.png';
import { Image } from "react-native";

const getNavigation = (modules, screens, initialRoute) => {
  const Navigation = () => {
    const routes = modules.concat(screens).map(mod => {
      const pakage = mod.package;
      const name = mod.value.title;
      const Navigator = mod.value.navigator;

      const Component = props => {
        return <OptionsContext.Provider value={getOptions(pakage)}>
            <Navigator {...props} />
          </OptionsContext.Provider>;
      };

      return <Stack.Screen key={name} name={name} component={Component} />;
    });

    const CustomBackButton = () => {
      return <Image style={_styles.YaqWDBWE} source={backIcon} />;
    };

    const screenOptions = {
      headerShown: true,
      headerBackImage: () => <CustomBackButton />
    };
    console.log("ROUTESS", routes);
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={screenOptions}>
          {routes}
        </Stack.Navigator>
      </NavigationContainer>;
  };

  return Navigation;
};

const getStore = globalState => {
  const appReducer = createReducer(globalState, _ => {
    return globalState;
  });
  const reducer = combineReducers({
    app: appReducer,
    ...reducers,
    ...connectors
  });
  return configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  });
};

const App = () => {
  const global = useContext(GlobalOptionsContext);
  const Navigation = getNavigation(modules, screens, initialRoute);
  const store = getStore(global);
  let effects = {};
  hooks.map(hook => {
    effects[hook.name] = hook.value();
  });
  return <Provider store={store}>
      <Navigation />
    </Provider>;
};

export default App;

const _styles = StyleSheet.create({
  YaqWDBWE: {
    height: 25,
    width: 25,
    position: "absolute",
    marginTop: -8
  }
});
