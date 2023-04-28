import { Routes, Route } from 'react-router-dom';
import Container from "@mui/material/Container";

import { Header } from "./components";
import { Registration,  Login, Log, Category, Catalog, FullGitara, Instruments, Vxod, Spisok, Zakaz, Tovar, Zakaz1, Status, NovTovar, Error } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/log" element={<Log />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/instrument/1234/strun" element={<FullGitara />} />
          
          <Route path="/vxod" element={<Vxod />} />
          <Route path="/spisok" element={<Spisok />} />
          <Route path="/zakaz" element={<Zakaz />} />
          <Route path="/tovar" element={<Tovar />} />
          <Route path="/zakaz1" element={<Zakaz1 />} />
          <Route path="/instrument/undefined/strun" element={<Instruments />} />
          <Route path="/novtovar" element={<NovTovar />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;



