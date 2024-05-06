import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./view/accueil/Accueil";
import NotFound from "./components/NotFound";
import Actualites from "./view/actualites/Actualites";
import Contact from "./view/contact/Contact";
import ActualitesOthers from "./view/actualites/ActualitesOthers";
import Projet from "./view/propos/Propos";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/a_propos" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/actualites/actualitesplus"
              element={<ActualitesOthers />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
