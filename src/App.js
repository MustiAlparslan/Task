import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import UpButton from "./components/UpButton"

function App() {
  const ShowRoutes = useRoutes(routes);

  return (
    <div className="w-full">
      <Toaster position="top-left" reverseOrder={false} />
      {ShowRoutes}
      <UpButton />
    </div>

  );
}

export default App;