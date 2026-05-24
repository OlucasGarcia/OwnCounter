import SidebarItem from "./SidebarItem";

import dashboardIcon from "../../assets/HomeIcon.png";
import transactionsIcon from "../../assets/TransactionIcon.png";
import reportsIcon from "../../assets/ReportsIcon.png";
import logoutIcon from "../../assets/LogoutIcon.png";
import logo from "../../assets/LogoIcon.png";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFinance } from "../../context/FinanceContext";

export default function Sidebar({
    isSidebarOpen,
    setIsSidebarOpen,
}) {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const { clearTransactions } =
        useFinance();

    function handleLogout() {
        clearTransactions();

        logout();

        navigate("/");
    }

    return (
        <aside
            className={`
    fixed
    top-0
    left-0
    z-50

    w-[260px]
    min-h-screen

    bg-[#5058CF]
    text-white

    flex
    flex-col

    px-5
    py-8

    transform
    transition-transform
    duration-300

    ${isSidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                }

    md:translate-x-0
`}
        >
            <button
                onClick={() =>
                    setIsSidebarOpen(
                        false
                    )
                }
                className="
            md:hidden
            text-3xl
            self-end
            mb-6
        "
            >
                ✕
            </button>

            <div
                className="
                    flex items-center
                    gap-3
                    mb-14
                "
            >
                <img
                    src={logo}
                    alt="OwnCounter"
                    className="w-10 h-10"
                />

                <h1
                    className="
                        text-3xl
                        font-bold
                    "
                >
                    OwnCounter
                </h1>
            </div>

            <nav className="flex flex-col gap-4">
                <SidebarItem
                    text="Inicio"
                    to="/dashboard"
                    icon={dashboardIcon}
                />

                <SidebarItem
                    text="Movimentações"
                    to="/transactions"
                    icon={transactionsIcon}
                />

                <SidebarItem
                    text="Relatórios"
                    to="/reports"
                    icon={reportsIcon}
                />
            </nav>

            <div className="mt-auto">
                <button
                    onClick={handleLogout}
                    className="
                        flex items-center
                        gap-3
                        font-semibold
                        opacity-80
                        hover:opacity-100
                        transition-all duration-300
                    "
                >
                    <img
                        src={logoutIcon}
                        alt="Logout"
                        className="w-12 h-8"
                    />

                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}