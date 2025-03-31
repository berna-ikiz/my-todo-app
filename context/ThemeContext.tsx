import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const ThemeContext = createContext(Colors.light);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [themeColors, setThemeColors] = useState(Colors.light); 

  useEffect(() => {
    const initialTheme = Colors[colorScheme || "light"]; 
    setThemeColors(initialTheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={themeColors}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);