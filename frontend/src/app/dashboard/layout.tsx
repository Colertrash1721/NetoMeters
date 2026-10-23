// dashboard layout.tsx
'use client';
import DashboardHeader from "@/components/dashboardHeader";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="grid grid-cols-[20%_80%] h-screen">
            <Navbar />
            <section className="bg-[--primary-background] grid grid-rows-[10%_90%] w-full">
                <DashboardHeader />
                {children}
            </section>
        </main>
    );
}