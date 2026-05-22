import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({
    icon,
    text,
    to,
}) {
    const location = useLocation();

    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`
        flex items-center gap-3
        px-5 py-4 rounded-2xl
        transition-all duration-200
        font-semibold
        ${isActive
                    ? "bg-[#6C73DD]"
                    : "hover:bg-[#5C63D6]"
                }
      `}
        >
            <img
                src={icon}
                alt={text}
                className="w-10"
            />

            <span>{text}</span>
        </Link>
    );
}