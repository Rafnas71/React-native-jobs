import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
      DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
      DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
      DMRegular: require("../assets/fonts/DMSans-Regular.ttf")
    });
  const onLayoutRootView = useCallback(async () => {
    console.log("onLayoutRootView called");
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
      console.log("Splash screen hidden");
    }
    if (!fontsLoaded && !fontError){
      console.log("Fonts not loaded, returning null");
      return null;
    }
  }, [fontsLoaded]);

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
