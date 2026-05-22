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
        p-6
        min-w-[220px]
        h-[120px]
      "
            style={{
                backgroundColor: bgColor,
                color: textColor,
                borderColor,
            }}
        >
            <span className="text-3xl font-bold">
                {title}
            </span>

            <strong className="text-3xl mt-2">
                {value}
            </strong>
        </div>
    );
}