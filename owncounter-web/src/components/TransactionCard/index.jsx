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
                flex items-center
                justify-between
                py-5
            "
        >
            {/* LEFT */}
            <div className="flex gap-4">
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
                            text-2xl
                            font-bold
                            text-black
                        "
                    >
                        {transaction.title}
                    </h3>

                    <span
                        className="
                            text-lg
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
                    gap-6
                "
            >
                {/* VALUE */}
                <div
                    className={`
                        flex items-center gap-2
                        font-bold text-2xl
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
                        text-2xl
                        font-bold
                    "
                >
                    ✕
                </button>
            </div>
        </div>
    );
}