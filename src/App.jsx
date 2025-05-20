import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';

import  Home  from "./routes/Home";
import  Info  from "./routes/Info.lazy";
import  Map  from "./routes/Map.lazy";
import  PlaceSearch from "./routes/PlaceSearch.lazy";
import NavBar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return(
    <StrictMode>
        <BrowserRouter>
        <NavBar/>
        <div>
            <main className="main_content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/search" element={<PlaceSearch />} />
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    </StrictMode>
     );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);