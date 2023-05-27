import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, CitasPage, ClientesPage, MascotasPage, ServiciosPage, VeterinariosPage, MaxMin, GroupBy} from './pages/index'
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Citas" element={<CitasPage/>}/>
          <Route path="Mascotas" element={<MascotasPage/>}/>
          <Route path="Servicios" element={<ServiciosPage/>}/>
          <Route path="Clientes" element={<ClientesPage/>}/>
          <Route path="Veterinarios" element={<VeterinariosPage/>}/>
          <Route path="Precios" element={<MaxMin/>}/>
          <Route path="Razas" element={<GroupBy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
