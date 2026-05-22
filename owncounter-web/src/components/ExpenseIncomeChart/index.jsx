import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
} from "recharts";

export default function ExpenseIncomeChart({
    data,
}) {
    return (
        <div
            className="
        w-full
        h-[320px]
        bg-white
        border border-[#E5E5F0]
        rounded-3xl
        p-6
      "
        >
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <BarChart data={data}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        opacity={0.1}
                    />

                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="income"
                        fill="#5058CF"
                        radius={[8, 8, 0, 0]}
                    />

                    <Bar
                        dataKey="expense"
                        fill="#F7621F"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}