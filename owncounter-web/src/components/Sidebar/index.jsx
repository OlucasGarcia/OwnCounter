import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <aside
            className="
        w-[260px]
        min-h-screen
        bg-[#5058CF]
        text-white
        flex
        flex-col
        px-5
        py-8
      "
        >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-14">
                <div className="w-10 h-10 bg-white rounded-xl" />

                <h1 className="text-3xl font-bold">
                    OwnCounter
                </h1>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-4">
                <SidebarItem
                    text="Inicio"
                    to="/dashboard"
                />

                <SidebarItem
                    text="Movimentações"
                    to="/transactions"
                />

                <SidebarItem
                    text="Relatórios"
                    to="/reports"
                />
            </nav>

            {/* Logout */}
            <div className="mt-auto">
                <button
                    className="
            flex items-center gap-3
            font-semibold
            opacity-80 hover:opacity-100
            transition-all
          "
                >
                    <div className="w-5 h-5 bg-white rounded" />

                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}