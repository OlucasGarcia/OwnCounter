export default function Button({
    children,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="
                w-full
                sm:w-auto

                bg-[#5058CF]
                hover:bg-[#434BC0]

                transition-all
                duration-300

                text-white
                font-bold

                text-sm
                md:text-base

                px-6
                md:px-10

                py-3

                rounded-xl
            "
        >
            {children}
        </button>
    );
}