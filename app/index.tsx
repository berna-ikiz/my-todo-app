import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import HomeScreens from "./screens/HomeScreen";


const index = () => {
  return (
    <ThemeProvider>
      <HomeScreens/>
    </ThemeProvider>
  )
}

export default index