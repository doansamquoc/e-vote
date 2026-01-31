import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./hooks/use-auth";
import { AppRouter } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='dark-mode'>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
