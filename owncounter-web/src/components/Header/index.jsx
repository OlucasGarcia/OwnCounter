import { useAuth } from "../../context/AuthContext";

export default function Header({ title, setIsSidebarOpen }) {

    const { user } = useAuth();

    return (
        <header
            className="
        sticky top-0
    z-30

    flex items-center
    justify-between
    backdrop-blur-sm
    px-4 py-5
    md:px-10 md:py-6
      "
        >
            <div
                className="
        flex items-center
        gap-4
    "
            >
                <button
                    onClick={() =>
                        setIsSidebarOpen(
                            true
                        )
                    }
                    className="
            md:hidden

            text-3xl
            text-[#5058CF]
        "
                >
                    ☰
                </button>

                <h1
                    className="
            text-2xl
            md:text-4xl

            font-bold
            text-[#5058CF]
        "
                >
                    {title}
                </h1>
            </div>

            <div className="text-right">
                <h2
                    className="
            text-lg
            md:text-4xl

            font-bold
            text-[#1E1E1E]
        "
                >
                    Olá,
                    {" "}
                    {user?.name ||
                        "Usuário"} 👋
                </h2>

                <p
                    className="
            hidden md:block

            text-xl
            text-gray-500
            mt-1
        "
                >
                    Bem-vindo ao
                    OwnCounter
                </p>
            </div>
        </header>
    );
}