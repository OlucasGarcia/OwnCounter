function parseLocalDate(dateString) {
    const [year, month, day] =
        dateString.split("-");

    return new Date(
        year,
        month - 1,
        day
    );
}

function isSameDay(date1, date2) {
    return (
        date1.getDate() ===
        date2.getDate() &&
        date1.getMonth() ===
        date2.getMonth() &&
        date1.getFullYear() ===
        date2.getFullYear()
    );
}

export function filterTransactions(
    transactions,
    period
) {
    const now = new Date();

    return transactions.filter(
        (transaction) => {
            const transactionDate =
                parseLocalDate(
                    transaction.date
                );

            if (period === "today") {
                return (
                    isSameDay(transactionDate, now)
                );
            }

            if (period === "week") {
                const weekAgo = new Date();

                weekAgo.setDate(
                    now.getDate() - 7
                );

                return (
                    transactionDate >= weekAgo &&
                    transactionDate <= now
                );
            }

            if (period === "month") {
                return (
                    transactionDate.getMonth() ===
                    now.getMonth() &&
                    transactionDate.getFullYear() ===
                    now.getFullYear()
                );
            }

            return true;
        }
    );
}

export function generateChartData(
    transactions
) {
    const grouped = {};

    transactions.forEach((transaction) => {
        const date =
            parseLocalDate(transaction.date).toLocaleDateString("pt-BR");

        if (!grouped[date]) {
            grouped[date] = 0;
        }

        if (
            transaction.type === "income"
        ) {
            grouped[date] +=
                transaction.amount;
        } else {
            grouped[date] -=
                transaction.amount;
        }
    });

    return Object.entries(grouped).map(
        ([name, value]) => ({
            name,
            value,
        })
    );
}

export function generateComparisonData(
    transactions
) {
    const grouped = {};

    transactions.forEach((transaction) => {
        const date =
            parseLocalDate(
                transaction.date
            ).toLocaleDateString("pt-BR");

        if (!grouped[date]) {
            grouped[date] = {
                income: 0,
                expense: 0,
            };
        }

        if (
            transaction.type === "income"
        ) {
            grouped[date].income +=
                transaction.amount;
        } else {
            grouped[date].expense +=
                transaction.amount;
        }
    });

    return Object.entries(grouped).map(
        ([name, values]) => ({
            name,
            income: values.income,
            expense: values.expense,
        })
    );
}

