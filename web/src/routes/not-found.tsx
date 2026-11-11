interface Props {
    default: boolean
}

import Pract from "../assets/preact.svg"
export default function NotFound(props: Props) {
    console.log(props.default)
    return (
        <div class={"h-screen w-full"}>
            <div class="mx-auto mt-36 flex items-center justify-center gap-2">
                <img src={Pract} alt={"vite-logo"} width={48} height={48} class={""} />
                <h1 class={"text-3xl font-semibold font-sans text-center"}>
                    Page not found
                </h1>
            </div>
        </div>

    )
}