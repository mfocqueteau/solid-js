import css from "./MainLayout.module.css";
import { Outlet } from "@solidjs/router";
import { Navbar } from "../Navbar/Navbar";

export function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <div class={css.leftColumn}>
        <Navbar />
      </div>
      <main style={{ padding: "0 2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
