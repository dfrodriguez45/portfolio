import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import App from "./App.jsx";
import "./index.css";
import LanguagesProvider from "./contexts/LanguagesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguagesProvider>
      <App />
    </LanguagesProvider>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
