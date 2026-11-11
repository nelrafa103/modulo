import type { HTMLAttributes } from "preact";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    variant?: "default"
}
export default function Link(props: LinkProps) {
    <a {...props}>
        {props.children}
    </a>
}