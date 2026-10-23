export default function DashboardHeader() {
return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#111c2e] w-full border-b border-gray-700">
        <div className="">
            <h1 className="text-2xl font-semibold text-gray-100">Company</h1>
        </div>
        <div className="flex items-center gap-4 text-xl">
            <i className="bx bx-user text-gray-100"></i>
            <span className="text-gray-100">John Doe</span>
            <i className="bx bx-log-out text-red-500"></i>
        </div>
    </header>
)
}