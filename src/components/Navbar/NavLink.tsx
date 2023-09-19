import css from "./Navbar.module.css";
import { NavLink as SolidNavLink } from "@solidjs/router";
import { ComponentProps, JSX } from "solid-js";

type Props = Omit<ComponentProps<typeof SolidNavLink>, "children"> & {
  icon?: JSX.Element;
  text: string;
};

export function NavLink(props: Props) {
  return (
    <>
      <SolidNavLink
        {...props}
        activeClass={css.active}
        class={css.navlink}
        style={{ "align-items": "center", display: "flex", gap: "0.5rem" }}
        href={"/solid-js" + props.href}
      >
        {props.icon}
        <span class="span" style={{ margin: 0, padding: 0 }}>
          {props.text}
        </span>
      </SolidNavLink>
    </>
  );
}
