import TransactionCard from "../TransactionCard";

export default function TransactionList({
    transactions,
}) {
    return (
        <div className="flex flex-col gap-2">
            {transactions.map((transaction) => (
                <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
}