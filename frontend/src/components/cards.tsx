type CardProps = {
    title: string;
    value: string;
    icon: string;
};

export default function Cards({ title, value, icon }: CardProps) {
    return (
        <div className="bg-[#1a2537] p-6 rounded-lg flex flex-items flex-col gap-4 w-full h-full border border-gray-700 hover:bg-[#2e3b4e] transition-colors duration-200">
            <div className="flex items-center justify-between text-gray-300 font-extralight">
                <h2 className="text-xl">{title}</h2>
                <i className={`${icon} text-2xl text-blue-500`}></i>
            </div>
            <p className="text-3xl font-bold text-white">{value}</p>
        </div>
    );
}