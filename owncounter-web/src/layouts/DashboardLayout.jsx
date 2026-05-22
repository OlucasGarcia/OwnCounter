import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children, title }) {
    return (
        <div className="flex min-h-screen bg-[#FFF]">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header title={title}/>

                <main className="flex-1 p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}