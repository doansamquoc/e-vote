import { ThemeProvider } from "./components/ThemeProvider";
import { AppRouter } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='dark-mode'>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
