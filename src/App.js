import { DataProvider } from "./context/DataContext";
import Banner from "./components/Banner";
import Stores from "./components/Stores";
import Solution from "./components/Solution";
import Jussi from "./components/Jussi";
import Contact from "./components/Contact";
import News from "./components/News";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Home from "./pages";

function App() {
  return (
    <DataProvider>
      <Router>
        <Home />
        <Banner />
        <Stores />
        <Solution />
        <Jussi />
        <Contact />
        <News />
        <Footer />
      </Router>
      <GlobalStyle />
    </DataProvider>
  );
}

export default App;
