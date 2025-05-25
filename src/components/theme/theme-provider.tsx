import {
  ThemeProvider as BaseThemeProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
