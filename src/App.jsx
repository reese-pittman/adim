import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';

import  Home  from "./routes/Home.jsx";
import  Info  from "./routes/Info.lazy"
import  Map  from "./routes/Map.lazy"

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return(
    <StrictMode>
        <BrowserRouter>
            <main className="main-content">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/map" element={<Map />} />
                </Routes>
            </main>
        </BrowserRouter>
    </StrictMode>
      
     );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);