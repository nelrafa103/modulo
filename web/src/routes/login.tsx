

import Logo from "../assets/614d1097-0a5e-4738-8119-975b124dd369.webp";
import Button from "../components/button";

export default function Login() {


    return (
        <main class="flex h-screen justify-center">
            <div class="my-auto space-y-6 md:min-w-md">
                <div class="mb-8">
                    <img
                        src={Logo}
                        class="mb-2 size-12 rounded-sm"
                        alt="Logo"
                        width="48"
                        height="48"
                    />

                    <h1 class="text-3xl font-bold">
                        Welcome back!
                    </h1>

                    <h2 class="text-sm text-gray-500">
                        We're happy to see you again
                    </h2>
                </div>

                <form
                    class="space-y-6"
                    onSubmit={(event) => {
                        event.preventDefault();

                        const formData = new FormData(event.currentTarget);

                        const email = formData.get("email");
                        const password = formData.get("password");

                        console.log({ email, password });
                    }}
                >
                    <fieldset class="flex flex-col gap-1">
                        <label
                            class="text-base font-medium"
                            for="email"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            class="rounded-sm border border-gray-300 px-2 py-1.5"
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            autocomplete="email"
                            required
                        />
                    </fieldset>

                    <fieldset class="flex flex-col gap-1">
                        <label
                            class="text-base font-medium"
                            for="password"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            class="rounded-sm border border-gray-300 px-2 py-1.5"
                            placeholder="Enter your password"
                            type="password"
                            autocomplete="current-password"
                            required
                        />
                    </fieldset>

                    <div class="space-y-2">
                        <p class="text-sm text-gray-500">
                            To register click{" "}
                            <a
                                class="font-semibold text-black underline"
                                href="/register"
                            >
                                here
                            </a>
                            , to recover your account{" "}
                            <a
                                class="font-semibold text-black underline"
                                href="/recover"
                            >
                                here
                            </a>
                        </p>

                        <Button class="w-full" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
}
