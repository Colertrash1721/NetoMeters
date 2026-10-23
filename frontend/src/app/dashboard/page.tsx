import Cards from "@/components/cards";

export default function Home() {
    return (
        <div className="grid grid-rows-[20%_80%] p-6 bg-[#0b121d]">
           <div className="flex flex-row gap-4">
                <Cards title="Total Medidores" value="12,234" icon="bx bx-bolt-circle" />
                <Cards title="Consumo kWh (hoy)" value="4.1M kWh" icon="bx bx-tachometer" />
                <Cards title="Alarmas Activas" value="15" icon="bx bx-bell" />
                <Cards title="Total Usuarios" value="1,234" icon="bx bx-user" />
           </div>
           
        </div>
    );
}