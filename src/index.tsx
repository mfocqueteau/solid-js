import "./index.css";
import { render } from "solid-js/web";
import { Route, Router, Routes } from "@solidjs/router"; // 👈 Import the router
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Home } from "./pages/Home";
import { Bachillerato } from "./pages/Bachillerato/Bachillerato";
render(
  () => (
    <Router>
      <Routes>
        <Route path="/solid-js" component={MainLayout}>
          <Route path="/bachillerato" component={Bachillerato} />
          <Route path="/" component={Home} />
        </Route>
      </Routes>
    </Router>
  ),
  document.getElementById("root")!
);
