export default function Header({ title }) {
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

            <span
                className="
          text-[#5058CF]
          font-semibold
          text-xl
        "
            >
                Olá 👋🏻
            </span>
        </header>
    );
}