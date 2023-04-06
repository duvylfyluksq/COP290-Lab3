import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import InDocked from "./pages/InDocked";
import InExpanded from "./pages/InExpanded";
import OutExpanded from "./pages/OutExpanded";
import OutDocked from "./pages/OutDocked";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/inexpanded":
        title = "";
        metaDescription = "";
        break;
      case "/outexpanded":
        title = "";
        metaDescription = "";
        break;
      case "/outdocked":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<InDocked />} />
      <Route path="/inexpanded" element={<InExpanded />} />
      <Route path="/outexpanded" element={<OutExpanded />} />
      <Route path="/outdocked" element={<OutDocked />} />
    </Routes>
  );
}
export default App;
