import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { NextUIProvider } from "@nextui-org/react";
import { TemplatesProvider } from "./hooks/useTemplates";

function App() {
  return (
    <NextUIProvider>
      <AuthProvider>
        <TemplatesProvider>
          <RouterProvider router={router} />
          <Toaster />
        </TemplatesProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

export default App;
