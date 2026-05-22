import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
} from "recharts";

export default function FinanceChart({
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
                <AreaChart data={data}>

                    <defs>
                        <linearGradient
                            id="income"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#5058CF"
                                stopOpacity={0.4}
                            />

                            <stop
                                offset="100%"
                                stopColor="#5058CF"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

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

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#5058CF"
                        fill="url(#income)"
                        strokeWidth={3}
                    />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}