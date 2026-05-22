import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const FinanceContext =
    createContext();

export function FinanceProvider({
    children,
}) {
    const [transactions, setTransactions] =
        useState(() => {
            const storage =
                localStorage.getItem(
                    "owncounter:transactions"
                );

            return storage
                ? JSON.parse(storage)
                : [];
        });

    // Persistência automática
    useEffect(() => {
        localStorage.setItem(
            "owncounter:transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    function addTransaction(
        transaction
    ) {
        setTransactions((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                ...transaction,
                amount: Number(
                    transaction.amount
                ),
            },
        ]);
    }

    function removeTransaction(id) {
        setTransactions((prev) =>
            prev.filter(
                (item) => item.id !== id
            )
        );
    }

    function clearTransactions() {
        setTransactions([]);
    }

    return (
        <FinanceContext.Provider
            value={{
                transactions,
                addTransaction,
                removeTransaction,
                clearTransactions,
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    return useContext(
        FinanceContext
    );
}