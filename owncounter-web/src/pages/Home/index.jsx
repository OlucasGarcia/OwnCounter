import { Link } from "react-router-dom";

import heroImage from "../../assets/hero.png";

export default function Home() {
    return (
        <main
            className="
        min-h-screen
        bg-[#FFF]
        px-6 md:px-12
        overflow-hidden
      "
        >
            {/* Header */}
            <header
                className="
          max-w-7xl
          mx-auto
          py-8
          flex items-center
          justify-between
        "
            >
                {/* Logo */}
                <h1
                    className="
            text-4xl
            font-black
            text-[#5058CF]
          "
                >
                    OwnCounter
                </h1>

                {/* Login */}
                <Link
                    to="/login"
                    className="
            px-5 py-3
            rounded-2xl
            border border-[#5058CF]
            text-[#5058CF]
            font-semibold
            transition-all duration-300
            hover:bg-[#5058CF]
            hover:text-white
          "
                >
                    Login
                </Link>
            </header>

            {/* Hero */}
            <section
                className="
          max-w-7xl
          mx-auto
          min-h-[80vh]
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-16
        "
            >
                {/* Texto */}
                <div>
                    <span
                        className="
              text-[#F7621F]
              font-bold
              uppercase
              tracking-wider
            "
                    >
                        Gerencie seu comércio
                    </span>

                    <h1
                        className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              mt-5
            "
                    >
                        Controle financeiro
                        simples e intuitivo
                    </h1>

                    <p
                        className="
              text-lg
              text-gray-600
              mt-8
              max-w-xl
              leading-relaxed
            "
                    >
                        Organize receitas,
                        despesas e relatórios
                        financeiros de forma
                        prática, moderna e
                        acessível para pequenos
                        comércios.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <Link
                            to="/dashboard"
                            className="
                bg-[#5058CF]
                text-white
                px-8 py-4
                rounded-2xl
                font-bold
                transition-all duration-300
                hover:scale-105
              "
                        >
                            Começar agora
                        </Link>

                        <Link
                            to="/reports"
                            className="
                border border-[#5058CF]
                text-[#5058CF]
                px-8 py-4
                rounded-2xl
                font-bold
                transition-all duration-300
                hover:bg-[#ECEBFF]
              "
                        >
                            Ver relatórios
                        </Link>
                    </div>
                </div>

                {/* Imagem */}
                <div className="relative flex justify-center">
                    <img
                        src={heroImage}
                        alt="OwnCounter dashboard"
                        className="
              w-full
              max-w-2xl
              relative
              z-10
            "
                    />

                    {/* Glow */}
                    <div
                        className="
              absolute
              w-[500px]
              h-[500px]
              bg-[#DAD4FF]
              rounded-full
              blur-3xl
              opacity-40
            "
                    />
                </div>
            </section>
        </main>
    );
}