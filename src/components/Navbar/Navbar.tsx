import css from "./Navbar.module.css";
import { Home, Info } from "@suid/icons-material";
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
            <NavLink href="/dashboard" text="Home" icon={<Home />} />
          </li>
          <li>
            <NavLink href="/about" text="About" icon={<Info />} />
          </li>
        </ul>
      </nav>
    </>
  );
}
