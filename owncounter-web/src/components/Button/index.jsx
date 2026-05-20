export default function Button({
    children,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
        bg-[#5058CF]
        hover:bg-[#434BC0]
        transition-all
        text-white
        font-bold
        px-10
        py-3
        rounded-xl
      "
        >
            {children}
        </button>
    );
}