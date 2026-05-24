import { formatCurrency } from "../../utils/currency";

import { formatDate } from "../../utils/date";

import { useFinance } from "../../context/FinanceContext";

export default function TransactionCard({
    transaction,
}) {
    const isIncome =
        transaction.type === "income";

    const { removeTransaction } =
        useFinance();

    return (
        <div
            className="
                flex flex-col
                md:flex-row
                md:items-center
                justify-between
                gap-4
                py-5
            "
        >
            {/* LEFT */}
            <div className="flex items-start gap-4 w-full">
                <div
                    className={`
                        w-[4px]
                        rounded-full
                        ${isIncome
                            ? "bg-[#57E83B]"
                            : "bg-[#FF5A1F]"
                        }
                    `}
                />

                <div>
                    <h3
                        className="
                            text-xl
                            md:text-2xl
                            font-bold
                            text-black
                        "
                    >
                        {transaction.title}
                    </h3>

                    <span
                        className="
                            text-sm
                            md:text-lg
                            text-black
                            opacity-80
                        "
                    >
                        {formatDate(
                            transaction.date
                        )}
                    </span>
                </div>
            </div>

            {/* RIGHT */}
            <div
                className="
                    flex items-center
                    justify-between
                    w-full
                    md:w-auto
                    gap-6
                "
            >
                {/* VALUE */}
                <div
                    className={`
                        flex items-center gap-2
                        font-bold text-xl md:text-2xl
                        ${isIncome
                            ? "text-[#57E83B]"
                            : "text-[#FF5A1F]"
                        }
                    `}
                >
                    <span>
                        {formatCurrency(
                            transaction.amount
                        )}
                    </span>

                    <span>
                        {isIncome
                            ? "↑"
                            : "↓"}
                    </span>
                </div>

                {/* DELETE BUTTON */}
                <button
                    onClick={() =>
                        removeTransaction(
                            transaction.id
                        )
                    }
                    className="
                        text-red-400
                        hover:text-red-500
                        transition-all duration-300
                        text-xl
                        md:text-2xl
                        font-bold
                    "
                >
                    ✕
                </button>
            </div>
        </div>
    );
}