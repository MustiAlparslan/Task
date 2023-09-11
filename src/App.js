import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import UpButton from "./components/UpButton"

function App() {
  const showRoutes = useRoutes(routes);

  return (
      <div className="w-full h-screen">
        <Toaster position="top-right" reverseOrder={false} />
          {showRoutes}
          <UpButton/>
      </div>

  );
}

export default App;