import css from "./Navbar.module.css";
import { Home, TableRows } from "@suid/icons-material";
import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <>
      <input id="toggle" class={css.toggle} type="checkbox" />
      <label for="toggle" class={css.burger}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <label for="toggle" class={css.toggleOut}></label>
      <nav class={css.navbar}>
        <ul>
          <li>
            <NavLink href="/" text="Home" icon={<Home />} end />
          </li>
          <li>
            <NavLink href="/bachillerato" text="Bachillerato" icon={<TableRows />} />
          </li>
        </ul>
      </nav>
    </>
  );
}
