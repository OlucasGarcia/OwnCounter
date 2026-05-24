import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useState } from "react";

export default function DashboardLayout({ children, title }) {

    const [isSidebarOpen,
        setIsSidebarOpen] =
        useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar
                isSidebarOpen={
                    isSidebarOpen
                }
                setIsSidebarOpen={
                    setIsSidebarOpen
                }
            />

            {isSidebarOpen && (
                <div
                    onClick={() =>
                        setIsSidebarOpen(
                            false
                        )
                    }
                    className="
                fixed inset-0
                bg-black/40
                z-40
                md:hidden
            "
                />
            )}

            <main
                className="
            flex-1
            min-h-screen
            md:ml-[260px]
        "
            >
                <Header
                    title={title}
                    setIsSidebarOpen={
                        setIsSidebarOpen
                    }
                />

                <div
                    className="
                px-4 py-6
                md:px-10 md:py-8
            "
                >
                    {children}
                </div>
            </main>
        </div>
    );
}