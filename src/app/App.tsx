import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes/routes";
import ThemeProvider from "../context/theme";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
