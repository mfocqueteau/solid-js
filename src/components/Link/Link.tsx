import { Link as SolidLink } from "@solidjs/router";
import { ComponentProps } from "solid-js";

export function Link(props: ComponentProps<typeof SolidLink>) {
  return (
    <SolidLink {...props} href={"/solid-js" + props.href}>
      {props.children}
    </SolidLink>
  );
}
