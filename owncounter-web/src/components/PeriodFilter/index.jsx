export default function PeriodFilter({
    current,
    setCurrent,
}) {
    const filters = [
        {
            key: "today",
            label: "Hoje",
        },
        {
            key: "week",
            label: "Esta semana",
        },
        {
            key: "month",
            label: "Este mês",
        },
    ];

    return (
        <div className="flex gap-4">
            {filters.map((filter) => (
                <button
                    key={filter.key}
                    onClick={() =>
                        setCurrent(filter.key)
                    }
                    className={`
            px-5 py-2 rounded-full
            border text-sm font-bold
            transition-all
            ${current === filter.key
                            ? "bg-[#5058CF] text-white border-[#5058CF]"
                            : "text-[#5058CF] border-[#5058CF]"
                        }
          `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}