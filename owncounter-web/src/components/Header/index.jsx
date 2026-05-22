import { useAuth } from "../../context/AuthContext";

export default function Header({ title }) {

    const { user } = useAuth();

    return (
        <header
            className="
        flex items-center justify-between
        px-10 pt-8
      "
        >
            <h1
                className="
          text-5xl
          font-bold
          text-[#5058CF]
        "
            >
                {title}
            </h1>

            <div>
                <h2
                    className="
      text-3xl
      font-bold
      text-[#1E1E1E]
    "
                >
                    Olá,
                    {user?.name || "Usuário"} 👋
                </h2>

                <p
                    className="
      text-gray-500
      mt-1
    "
                >
                    Bem-vindo ao OwnCounter
                </p>
            </div>
        </header>
    );
}