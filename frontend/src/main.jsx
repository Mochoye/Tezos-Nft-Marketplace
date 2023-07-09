import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Mint from "./pages/Mint";
import Help from "./pages/Help";
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/help" element={<Help />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
