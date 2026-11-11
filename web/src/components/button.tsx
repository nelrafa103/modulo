import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes
} from "preact";

import Styles from "../styles/button.module.css";

interface BaseProps {
    "data-variant"?: "default" | "outline";
}

type ButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
    };

type AnchorProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
    };

type Props = ButtonProps | AnchorProps;

export default function Button(props: Props) {
    const { as = "button", ...rest } = props;

    const className = `${Styles.btn} ${Styles[props["data-variant"]!] ?? ""} ${props.class ?? ""}`;

    if (as === "a") {
        return (
            <a {...rest as AnchorProps} class={className}>
                {props.children}
            </a>
        );
    }

    return (
        <button {...rest as ButtonProps} class={className}>
            {props.children}
        </button>
    );
}