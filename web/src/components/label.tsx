import type { LabelHTMLAttributes } from "preact";
import styles from "../styles/label.module.css"
interface LabelProps extends LabelHTMLAttributes { }
export default function Label(props: LabelProps) {
	return (
		<label {...props} class={`${styles.label} + ${props.class}`}>
			{props.children}
		</label>
	)
}