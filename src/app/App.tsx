import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes/routes";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />;
};

function App() {
  return <AppRouter />;
}

export default App;
