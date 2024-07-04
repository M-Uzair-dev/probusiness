import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";

const App = () => {
  return (
    <div>
      <Toaster richColors position="bottom-left" closeButton />
      <Outlet />
    </div>
  );
};

export default App;
