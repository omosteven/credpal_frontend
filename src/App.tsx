import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Layout from "./components/ui/layout";
import Home from "./pages/Home";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
