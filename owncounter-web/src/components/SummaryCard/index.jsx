export default function SummaryCard({
    title,
    value,
    bgColor,
    textColor,
    borderColor,
}) {
    return (
        <div
            className="
                flex flex-col
                justify-center

                rounded-3xl
                border

                p-5
                md:p-6

                min-h-[110px]
                md:h-[120px]

                w-full
            "
            style={{
                backgroundColor:
                    bgColor,
                color: textColor,
                borderColor,
            }}
        >
            <span
                className="
                    text-xl
                    md:text-3xl

                    font-bold
                "
            >
                {title}
            </span>

            <strong
                className="
                    text-2xl
                    md:text-3xl

                    mt-2
                "
            >
                {value}
            </strong>
        </div>
    );
}