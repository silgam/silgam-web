// Components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Mainpage from "./pages/mainpage";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

function App(): JSX.Element {
  return (
    <div className="web">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
