import "./index.css";
import { render } from "solid-js/web";
import { Route, Router, Routes } from "@solidjs/router"; // 👈 Import the router
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
render(
  () => (
    <Router>
      <Routes>
        <Route path="/solid-js" component={MainLayout}>
          <Route path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
        </Route>
      </Routes>
    </Router>
  ),
  document.getElementById("root")!
);
