import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";

const App = () => {
  const [pass, setPass] = useState(false);
  setTimeout(() => {
    setPass(true);
  }, 1000);
  return (
    <div>
      <Toaster richColors position="bottom-left" closeButton />
      {pass ? <Outlet /> : <h3>Loading...</h3>}
    </div>
  );
};

export default App;
