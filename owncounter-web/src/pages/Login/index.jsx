import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const [name, setName] =
        useState("");

    const { login } = useAuth();

    const navigate =
        useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim()) return;

        login(name);

        navigate("/dashboard");
    }

    return (
        <main
            className="
        min-h-screen
        flex items-center
        justify-center
        bg-[#F8F7FF]
        px-6
      "
        >
            <form
                onSubmit={handleSubmit}
                className="
          bg-white
          p-10
          rounded-3xl
          shadow-lg
          w-full
          max-w-md
        "
            >
                <h1
                    className="
            text-4xl
            font-black
            text-[#5058CF]
            mb-3
          "
                >
                    OwnCounter
                </h1>

                <p
                    className="
            text-gray-500
            mb-8
          "
                >
                    Entre para continuar
                </p>

                <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    className="
            w-full
            border
            border-gray-200
            rounded-2xl
            px-5 py-4
            outline-none
            focus:border-[#5058CF]
          "
                />

                <button
                    type="submit"
                    className="
            w-full
            mt-6
            bg-[#5058CF]
            text-white
            py-4
            rounded-2xl
            font-bold
            transition-all duration-300
            hover:scale-[1.02]
          "
                >
                    Entrar
                </button>
            </form>
        </main>
    );
}